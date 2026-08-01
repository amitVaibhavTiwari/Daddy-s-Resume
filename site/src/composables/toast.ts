import { toast } from "vue-sonner";
import type { ChangedCase } from "@ohmycv/case-police";

export const useToast = () => {
  const {
    $i18n: { t }
  } = useNuxtApp();

  const save = () => {
    toast.success(t("notification.save"));
  };

  const onSwitch = (msg: string) => {
    toast.info(t("notification.switch", { msg }));
  };

  const onDelete = (msg: string) => {
    toast.error(t("notification.delete", { msg }));
  };

  const onNew = () => {
    toast.success(t("notification.new"));
  };

  const duplicate = (msg: string) => {
    toast.success(
      t("notification.duplicate", {
        old: msg,
        new: msg + " Copy"
      })
    );
  };

  const correct = (msg?: ChangedCase[]) => {
    if (msg?.length) {
      const groups = msg.reduce<Record<string, number>>((acc, { from, to }) => {
        const key = `${from} → ${to}`;
        acc[key] = (acc[key] ?? 0) + 1;
        return acc;
      }, {});

      const description = Object.entries(groups)
        .map(([key, count]) => `${key}${count > 1 ? ` (x${count})` : ""}`)
        .join(", ");

      toast.success(t("notification.correct.yes", { num: msg.length }), {
        description
      });
    } else {
      toast.info(t("notification.correct.no"));
    }
  };

  const onImport = (msg: boolean) => {
    if (msg) {
      toast.success(t("notification.import.yes"));
    } else {
      toast.error(t("notification.import.no"));
    }
  };

  const driveSync = (success: boolean) => {
    if (success) {
      toast.success("Synced to Google Drive");
    } else {
      toast.error("Failed to sync to Google Drive");
    }
  };

  const driveImport = (success: boolean) => {
    if (success) {
      toast.success("Imported from Google Drive");
    } else {
      toast.error("No backup found on Google Drive");
    }
  };

  return {
    save,
    switch: onSwitch,
    delete: onDelete,
    new: onNew,
    duplicate,
    correct,
    import: onImport,
    driveSync,
    driveImport
  };
};
