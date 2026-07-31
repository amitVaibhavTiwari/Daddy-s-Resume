type TokenClient = {
  requestAccessToken: (config?: { prompt?: string }) => void;
};

type TokenResponse = {
  access_token: string;
  error?: string;
};

const DRIVE_FILE_NAME = "markdown-resume-backup.json";
const SCOPE = "https://www.googleapis.com/auth/drive.file";

export const useGoogleDrive = () => {
  const config = useRuntimeConfig();
  const clientId = config.public.googleClientId as string;

  // Shared across all component instances within the session
  const accessToken = useState<string | null>("gdrive-token", () => null);
  const isSignedIn = computed(() => !!accessToken.value);

  const _loadGsi = (): Promise<void> =>
    new Promise((resolve) => {
      const g = (window as any).google;
      if (g?.accounts?.oauth2) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });

  const signIn = (): Promise<boolean> =>
    new Promise(async (resolve) => {
      await _loadGsi();

      const client: TokenClient = (window as any).google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: SCOPE,
        callback: (response: TokenResponse) => {
          if (response.error || !response.access_token) {
            resolve(false);
            return;
          }
          accessToken.value = response.access_token;
          resolve(true);
        }
      });

      client.requestAccessToken({ prompt: "" });
    });

  const signOut = () => {
    if (accessToken.value) {
      (window as any).google?.accounts.oauth2.revoke(accessToken.value, () => {});
    }
    accessToken.value = null;
  };

  const _headers = () => ({ Authorization: `Bearer ${accessToken.value}` });

  const _ensureAuth = async (): Promise<boolean> => {
    if (accessToken.value) return true;
    return signIn();
  };

  const _findFileId = async (): Promise<string | null> => {
    const q = encodeURIComponent(`name='${DRIVE_FILE_NAME}' and trashed=false`);
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id)&spaces=drive`,
      { headers: _headers() }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return (json.files?.[0]?.id as string) ?? null;
  };

  const saveAllToDrive = async (jsonData: object): Promise<boolean> => {
    if (!(await _ensureAuth())) return false;

    const fileId = await _findFileId();
    const content = JSON.stringify(jsonData);
    const metadata = { name: DRIVE_FILE_NAME, mimeType: "application/json" };
    const boundary = "mr_gdrive_boundary";

    const body = [
      `--${boundary}`,
      "Content-Type: application/json; charset=UTF-8",
      "",
      JSON.stringify(metadata),
      `--${boundary}`,
      "Content-Type: application/json",
      "",
      content,
      `--${boundary}--`
    ].join("\r\n");

    const url = fileId
      ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart`
      : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";

    const res = await fetch(url, {
      method: fileId ? "PATCH" : "POST",
      headers: {
        ..._headers(),
        "Content-Type": `multipart/related; boundary=${boundary}`
      },
      body
    });

    return res.ok;
  };

  const loadFromDrive = async (): Promise<string | null> => {
    if (!(await _ensureAuth())) return null;

    const fileId = await _findFileId();
    if (!fileId) return null;

    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      { headers: _headers() }
    );

    if (!res.ok) return null;
    return res.text();
  };

  return {
    isSignedIn,
    clientId,
    signIn,
    signOut,
    saveAllToDrive,
    loadFromDrive
  };
};
