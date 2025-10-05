import hljs from "highlight.js/lib/core";
const loadedLanguages = new Set();

const loadLanguageLib = async (language: string) => {
  try {
    switch (language) {
      case "javascript":
      case "js":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/javascript")
        );
        break;
      case "typescript":
      case "ts":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/typescript")
        );
        break;
      case "python":
      case "py":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/python")
        );
        break;
      case "java":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/java")
        );
        break;
      case "css":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/css")
        );
        break;
      case "html":
      case "xml":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/xml")
        );
        break;
      case "json":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/json")
        );
        break;
      case "yaml":
      case "yml":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/yaml")
        );
        break;
      case "bash":
      case "shell":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/bash")
        );
        break;
      case "sql":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/sql")
        );
        break;
      case "php":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/php")
        );
        break;
      case "c":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/c")
        );
        break;
      case "cpp":
      case "c++":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/cpp")
        );
        break;
      case "csharp":
      case "c#":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/csharp")
        );
        break;
      case "go":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/go")
        );
        break;
      case "rust":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/rust")
        );
        break;
      case "dockerfile":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/dockerfile")
        );
        break;
      case "markdown":
      case "md":
        hljs.registerLanguage(
          language,
          require("highlight.js/lib/languages/markdown")
        );
        break;
      default:
        // Linguagem não suportada - usa auto-detect
        break;
    }
    return true;
  } catch {
    return false;
  }
};

export function loadLanguage(language: string) {
  if (!loadedLanguages.has(language)) {
    loadLanguageLib(language);
    loadedLanguages.add(language);
  }
}
