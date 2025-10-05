import { normalizeId } from "@/util/normalizeId";
import { CopyToClipboard } from "./CopyToClipbord";
import hljs from "highlight.js/lib/core";
import { loadLanguage } from "@/util/loadCodeLanguageLib";

interface ICode {
  id?: string;
  language: string;
  code: string;
}

export function Code({ code, language, id }: ICode) {
  loadLanguage(language);

  if (!id) {
    id = normalizeId(code.substring(0, 10));
  }

  const highlightedCode = hljs.highlight(code, { language }).value;
  return (
    <pre
      key={id}
      className="relative rounded-xl bg-zinc-900 p-4 pt-10 overflow-x-auto text-sm leading-relaxed shadow-l "
    >
      <div className="absolute left-5 top-5 flex gap-2">
        <strong>{language}</strong>
      </div>
      <div className="absolute right-5 top-5 flex gap-2">
        <CopyToClipboard
          content={code}
          description="Copiar código"
          showDescription={true}
          id={id}
        />
      </div>

      <div className="mt-8">
        <code key={id} className="mt-4 text-gray-100 font-mono">
          <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </code>
      </div>
    </pre>
  );
}
