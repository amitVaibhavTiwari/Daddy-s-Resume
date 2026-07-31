import type * as Monaco from "monaco-editor";

declare global {
  interface Window {
    monaco: typeof Monaco | undefined;
  }
}

export type MonacoModel = {
  get: () => Monaco.editor.ITextModel;
  dispose: () => void;
};

/**
 * Import Monaco and its workers, avoid SSR/SSG errors.
 *
 * https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046
 * https://github.com/antfu/vite-ssgx/issues/74
 * https://github.com/YunYouJun/web-resume/blob/main/src/monaco/setup.ts
 */
export const setupMonaco = async () => {
  if (window.monaco) {
    return {
      monaco: window.monaco
    };
  }

  // Import manaco
  const monaco = await import("monaco-editor");
  window.monaco = monaco;

  // Import editor and css workers
  const [{ default: EditorWorker }, { default: CssWorker }] = await Promise.all([
    import("monaco-editor/esm/vs/editor/editor.worker?worker"),
    import("monaco-editor/esm/vs/language/css/css.worker?worker")
  ]);

  window.MonacoEnvironment = {
    getWorker(_moduleId: string, label: string) {
      switch (label) {
        case "editorWorkerService":
          return new EditorWorker();
        case "css":
          return new CssWorker();
        default:
          throw new Error(`Unknown label ${label}`);
      }
    }
  };

  // Theme
  setupMonacoTheme(monaco);

  return { monaco };
};

export const setupMonacoModel = async (
  language: "markdown" | "css",
  content: string,
  onChange: () => void
): Promise<MonacoModel> => {
  const { monaco } = await setupMonaco();

  const disposables: Monaco.IDisposable[] = [];
  const model = monaco.editor.createModel(content, language);

  disposables.push(model);
  disposables.push(model.onDidChangeContent(onChange));

  return {
    get: () => model,
    dispose: () => disposables.forEach((disposable) => disposable.dispose())
  };
};

export const setupMonacoEditor = async (container: HTMLElement) => {
  const { monaco } = await setupMonaco();

  const editor = monaco.editor.create(container, {
    wordWrap: "on",
    fontSize: 13,
    fontFamily: `Menlo, Monaco, "Courier New", monospace`,
    lineHeight: 1.5,
    automaticLayout: true
  });

  return { editor };
};

export const setupMonacoTheme = async (monaco: typeof Monaco) => {
  // One Dark Pro theme
  monaco.editor.defineTheme("one-dark-pro", {
    base: "vs-dark",
    inherit: true,
    rules: [
      // Comments — muted gray, italic
      { token: "comment", foreground: "7f848e", fontStyle: "italic" },

      // Keywords — purple
      { token: "keyword", foreground: "c678dd" },
      { token: "keyword.operator", foreground: "56b6c2" },
      { token: "keyword.control", foreground: "c678dd" },

      // Strings — green
      { token: "string", foreground: "98c379" },
      { token: "string.escape", foreground: "56b6c2" },

      // Numbers — warm orange
      { token: "number", foreground: "d19a66" },

      // Constants / booleans
      { token: "constant", foreground: "d19a66" },
      { token: "constant.language", foreground: "c678dd" },

      // Functions — blue
      { token: "entity.name.function", foreground: "61afef" },
      { token: "support.function", foreground: "61afef" },

      // Types / classes — yellow
      { token: "entity.name.type", foreground: "e5c07b" },
      { token: "entity.name.class", foreground: "e5c07b" },
      { token: "support.class", foreground: "e5c07b" },

      // Variables — light red
      { token: "variable", foreground: "e06c75" },
      { token: "variable.parameter", foreground: "d19a66" },

      // Operators — cyan
      { token: "operator", foreground: "56b6c2" },
      { token: "delimiter", foreground: "abb2bf" },

      // HTML / XML tags
      { token: "tag", foreground: "e06c75" },
      { token: "tag.attribute.name", foreground: "d19a66" },
      { token: "attribute.name", foreground: "d19a66" },
      { token: "attribute.value", foreground: "98c379" },
      { token: "metatag", foreground: "e5c07b" },

      // CSS property names — light blue
      { token: "attribute.name.css", foreground: "61afef" },
      { token: "attribute.value.css", foreground: "98c379" },
      { token: "attribute.value.number.css", foreground: "d19a66" },
      { token: "attribute.value.unit.css", foreground: "56b6c2" },
      { token: "attribute.value.hex.css", foreground: "d19a66" },
      { token: "keyword.css", foreground: "c678dd" },
      { token: "selector.css", foreground: "e06c75" },

      // Markdown — headings purple, bold stays foreground, italic slightly dimmed
      { token: "keyword.md", foreground: "c678dd" },
      { token: "strong.md", foreground: "e5c07b", fontStyle: "bold" },
      { token: "emphasis.md", foreground: "abb2bf", fontStyle: "italic" },
      { token: "string.link.md", foreground: "98c379" },
      { token: "variable.md", foreground: "56b6c2" },

      // YAML (front matter)
      { token: "string.yaml", foreground: "98c379" },
      { token: "keyword.yaml", foreground: "e06c75" },
      { token: "number.yaml", foreground: "d19a66" },
      { token: "constant.language.yaml", foreground: "d19a66" }
    ],
    colors: {
      "editor.background": "#282c34",
      "editor.foreground": "#abb2bf",
      "editor.lineHighlightBackground": "#2c313a",
      "editor.lineHighlightBorder": "#00000000",
      "editorLineNumber.foreground": "#4b5263",
      "editorLineNumber.activeForeground": "#abb2bf",
      "editorCursor.foreground": "#528bff",
      "editor.selectionBackground": "#3e4451",
      "editor.inactiveSelectionBackground": "#3a3f4b",
      "editorIndentGuide.background1": "#3b4048",
      "editorBracketMatch.background": "#515a6b80",
      "editorBracketMatch.border": "#515a6b",
      "dropdown.background": "#21252b",
      "menu.separatorBackground": "#3e4451"
    }
  });

  monaco.editor.setTheme("one-dark-pro");
};
