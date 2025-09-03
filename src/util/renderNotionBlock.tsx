/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { JSX } from "react";
import { normalizeId } from "./normalizeId";
import { CopyToClipboard } from "@/components/CopyToClipbord";
import { apiLogger } from "@/lib/logger";
import hljs from 'highlight.js/lib/core';
import { envVariables } from "@/env";
import Link from "next/link";
import { httpClient } from "@/lib/httpClient";

type Block = {
  id: string;
  type: string;
  [key: string]: any;
};

type Metadata = {
  title: string;
  description: string;
  image: string;
  url: string;
  favicon?: string
  domain?: string

}

const loadedLanguages = new Set();

const loadLanguage = async (language: string) => {
  try {
    switch (language) {
      case 'javascript':
      case 'js':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/javascript'));
        break;
      case 'typescript':
      case 'ts':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/typescript'));
        break;
      case 'python':
      case 'py':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/python'));
        break;
      case 'java':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/java'));
        break;
      case 'css':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/css'));
        break;
      case 'html':
      case 'xml':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/xml'));
        break;
      case 'json':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/json'));
        break;
      case 'yaml':
      case 'yml':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/yaml'));
        break;
      case 'bash':
      case 'shell':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/bash'));
        break;
      case 'sql':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/sql'));
        break;
      case 'php':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/php'));
        break;
      case 'c':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/c'));
        break;
      case 'cpp':
      case 'c++':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/cpp'));
        break;
      case 'csharp':
      case 'c#':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/csharp'));
        break;
      case 'go':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/go'));
        break;
      case 'rust':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/rust'));
        break;
      case 'dockerfile':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/dockerfile'));
        break;
      case 'markdown':
      case 'md':
        hljs.registerLanguage(language, require('highlight.js/lib/languages/markdown'));
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


const blockRenderers: Record<string, (block: Block) => JSX.Element> = {

  paragraph: (block) => (
    <p key={block.id}>
      {block.paragraph.rich_text.map((text: any, i: number) => (
        renderRichText(text, i)
      ))}
    </p>
  ),

  heading_1: (block) => (
    <h1 key={block.id} id={`id_${normalizeId(block.id)}`} className="text-3xl md:text-4xl font-bold mb-3 mt-6">
      {block.heading_1.rich_text.map((text: any, i: number) => (
        <React.Fragment key={i}>{text.plain_text}</React.Fragment>
      ))}
    </h1>
  ),

  heading_2: (block) => (
    <h2 key={block.id} id={`id_${normalizeId(block.id)}`} className="text-xl md:text-2xl font-bold mb-3 mt-6">
      {block.heading_2.rich_text.map((text: any, i: number) => (
        <React.Fragment key={i}>{text.plain_text}</React.Fragment>
      ))}
    </h2>
  ),

  heading_3: (block) => (
    <h3 key={block.id} id={`id_${normalizeId(block.id)}`} className="text-lg md:text-xl font-bold mb-3 mt-6">
      {block.heading_3.rich_text.map((text: any, i: number) => (
        renderRichText(text, i)
      ))}
    </h3>
  ),

  bulleted_list_item: (block) => (
    <li key={block.id} className="ml-4 list-disc">
      {block.bulleted_list_item.rich_text.map((text: any, i: number) => (
        renderRichText(text, i)
      ))}
    </li>
  ),

  numbered_list_item: (block) => (
    <li key={block.id} className="ml-4 list-decimal">
      {block.numbered_list_item.rich_text.map((text: any, i: number) => (
        renderRichText(text, i)
      ))}
    </li>
  ),

  to_do: (block) => (
    <div key={block.id}>
      <label className="flex items-center gap-2">
        <input type="checkbox" defaultChecked={block.to_do.checked} readOnly />
        {block.to_do.rich_text.map((text: any, i: number) => (
          renderRichText(text, i)
        ))}
      </label>
    </div>
  ),

  toggle: (block) => (
    <details key={block.id}>
      <summary>
        {block.toggle.rich_text.map((text: any, i: number) => (
          renderRichText(text, i)
        ))}
      </summary>
    </details>
  ),

  quote: (block) => (
    <blockquote key={block.id} className="border-l-4 border-gray-300 pl-4 italic my-4">
      {block.quote.rich_text.map((text: any, i: number) => (
        renderRichText(text, i)
      ))}
    </blockquote>
  ),

  callout: (block) => (
    <div key={block.id} className="bg-background rounded-lg border text-card-foreground shadow-sm p-4 my-4 flex items-start gap-2 hover:shadow-glow transition-all duration-300">
      <span>{block.callout.icon?.emoji}</span>
      <div>
        {block.callout.rich_text.map((text: any, i: number) => (
          renderRichText(text, i)
        ))}
      </div>
    </div>
  ),
  image: (block) => (
    <div key={block.id} className="my-4 w-full flex justify-center">
      <Image
        src={block.image.file.url}
        alt={block.image.caption.map((text: any) => text.plain_text).join(" ")}
        width={0}
        height={0}
        sizes="100vw"
        className="w-4/4  sm:w-4/4 md:w-3/4 lg:w-3/4 xl:w-4/5 h-auto max-w-full"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAAyCAYAAACqECmXAAAAuUlEQVR42u3VQREAAAQAMCJ5yK+alxDuthLLrp4AAF5LoQOA0AEAoQMAQgcAhA4AQgcAhA4ACB0AEDoACB0AEDoAIHQAQOgAIHQAQOgAgNABAKEDgNABAKEDAEIHAIQOAEIHAIQOAAgdABA6AAgdABA6ACB0AEDoACB0AEDoAIDQAQChA4DQAQChAwBCBwCEDgBCBwCEDgAIHQAQOgAIXegAIHQAQOgAgNABAKEDgNABAKEDAEIHAM4CSk9Dxy9wAB8AAAAASUVORK5CYII="

      />
    </div>
  ),
  code: (block) => {
    const codeContent = block.code.rich_text.map((text: any, i: number) => (
      renderRichText(text, i, true)
    ))[0]
    const language = block.code.language

    if (!loadedLanguages.has(language)) {
      loadLanguage(language);
      loadedLanguages.add(language);
    }

    const highlightedCode = hljs.highlight(
      codeContent,
      { language }
    ).value



    return (
      <pre key={block.id} className="relative rounded-xl bg-zinc-900 p-4 pt-10 overflow-x-auto text-sm leading-relaxed shadow-l">
        <div className="absolute left-5 top-5 flex gap-2">
          <strong>{language}</strong>

        </div>
        <div className="absolute right-5 top-5 flex gap-2">

          <CopyToClipboard
            content={codeContent}
            description="Copiar código"
            showDescription={true}
            id={block.id}
          />
        </div>

        <div className="mt-8">
          <code key={block.id} className="mt-4 text-gray-100 font-mono">
            <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </code>
        </div>
      </pre>
    )
  },
  divider: (block) => <hr key={block.id} className="my-0!" />,
  bookmark: (block) => <></>
};

const AsynclockRenderers: Record<string, (block: Block) => Promise<JSX.Element>> = {
  bookmark: async (block) => {
    const bookmarkUrl = block.bookmark.url;

    try {
      const [metadataError, metadata] = await httpClient<Metadata>(
        `https://api.linkpreview.net/?key=${envVariables.LINK_PREVIEW}&q=${encodeURIComponent(bookmarkUrl)}`, {
        cache: 'default',
        next: {
          revalidate: 24 * 60 * 60, // 24 hours
          tags: [`link:preview:${bookmarkUrl}`]
        }
      });
      if (metadataError) return <></>

      return (
        <div key={block.id} className="max-h-40 h-40 border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <Link href={bookmarkUrl} target="_blank" rel="noopener noreferrer" className="block no-underline!">
            <div className="flex justify-between">
              <div className="flex-1 p-2">
                <div className="flex items-center gap-1 mb-1">
                  {metadata.favicon && <Image src={metadata.favicon} alt="Teste" className="w-4 h-4" fill />}
                  {metadata.domain && <span className="text-sm text-muted-foreground">{metadata.domain}</span>}

                </div>
                <div className="h-full flex flex-col justify-between pb-2 pr-2">
                  <h3 className="text-xl! font-semibold mb-1! mt-1!">{metadata.title}</h3>
                  <p className="m-0! text-sm text-muted-foreground line-clamp-2">{metadata.description}</p>
                  <p className="m-0! text-xs text-muted-foreground mt-1 truncate">{bookmarkUrl}</p>
                </div>
              </div>
              {metadata.image && (
                <div className="relative w-[30%] max-h-40 h-40 flex-shrink-0 m-0 hidden sm:block">
                  <Image src={metadata.image} alt={`${metadata.title} image`} className="m-0! object-cover" fill />
                </div>
              )}
            </div>
          </Link>
        </div>
      );
    } catch {
      // Fallback para URL simples
      return <a href={bookmarkUrl} className="text-primary hover:underline">{bookmarkUrl}</a>;
    }
  }
}
{/* <div contenteditable="false" data-content-editable-void="true" role="figure" aria-labelledby=":rqn:"><div style="display: flex;"><a href="https://www.youtube.com/" role="link" target="_blank" rel="noopener noreferrer" style="display: flex; color: rgb(55, 154, 211); text-decoration: none; user-select: none; transition: background 20ms ease-in; cursor: pointer; flex-grow: 1; min-width: 0px; flex-wrap: wrap-reverse; align-items: stretch; text-align: start; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.13); border-radius: 10px; position: relative; fill: rgb(55, 154, 211);"><div style="flex: 4 1 180px; padding: 12px 14px 14px; overflow: hidden; text-align: start;"><div style="font-size: 14px; line-height: 20px; color: rgba(255, 255, 255, 0.81); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-height: 24px; margin-bottom: 2px;">YouTube</div><div style="font-size: 12px; line-height: 16px; color: rgba(255, 255, 255, 0.46); height: 32px; overflow: hidden;">Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.</div><div style="display: flex; margin-top: 6px;"><img src="/image/https%3A%2F%2Fwww.youtube.com%2Fs%2Fdesktop%2F271635d3%2Fimg%2Flogos%2Ffavicon_144x144.png?table=block&amp;id=26076eb7-2c63-80cd-9437-de87c269cbb0&amp;spaceId=c3b7ccb9-0932-4dad-bffa-81d6ed66dbb6&amp;userId=d28d55a7-2fa6-48e3-9616-96f09c9dd9db&amp;cache=v2" style="width: 16px; height: 16px; min-width: 16px; margin-inline-end: 6px;"><div style="font-size: 12px; line-height: 16px; color: rgba(255, 255, 255, 0.81); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">https://www.youtube.com/</div></div></div><div style="flex: 1 1 180px; display: block; position: relative;"><div style="position: absolute; top: 0px; inset-inline: 0px; bottom: 0px;"><div class="" style="width: 100%; height: 100%;"><img alt="" src="/image/https%3A%2F%2Fwww.youtube.com%2Fimg%2Fdesktop%2Fyt_1200.png?table=block&amp;id=26076eb7-2c63-80cd-9437-de87c269cbb0&amp;spaceId=c3b7ccb9-0932-4dad-bffa-81d6ed66dbb6&amp;width=500&amp;userId=d28d55a7-2fa6-48e3-9616-96f09c9dd9db&amp;cache=v2" referrerpolicy="same-origin" style="display: block; object-fit: cover; border-radius: 2px; width: 100%; height: 100%;"></div></div></div></a><div style="position: relative; inset-inline-start: 0px;"></div></div></div> */ }

export async function renderNotionBlock(blocks: Block[]) {

  const renderedContent: React.ReactNode[] = [];
  let currentListType: 'ul' | 'ol' | null = null;
  let currentListItems: JSX.Element[] = [];
  let currentListId = "";

  const flushList = () => {
    if (currentListType && currentListItems.length > 0) {
      const ListTag = currentListType as 'ul' | 'ol';
      renderedContent.push(
        React.createElement(ListTag, { key: currentListId, className: "ml-4 my-2" }, currentListItems)
      );
    }
    currentListItems = [];
    currentListType = null;
    currentListId = "";
  };

  for (const block of blocks) {
    const { type, id } = block;

    if (type === "bulleted_list_item" || type === "numbered_list_item") {
      const desiredListType = type === "bulleted_list_item" ? "ul" : "ol";
      if (currentListType !== desiredListType) {
        flushList();
        currentListType = desiredListType;
        currentListId = id;
      }

      currentListItems.push(blockRenderers[type](block));
    } else {
      flushList();

      const renderer = blockRenderers[type];




      if (typeof renderer === "function") {
        if (type == 'bookmark') {
          renderedContent.push(await AsynclockRenderers[type](block));
        } else {
          renderedContent.push(renderer(block));
        }

      } else {
        apiLogger.warn(`Nenhum renderer encontrado para o tipo "${blockRenderers[type]}"`);
      }
    }
  }

  flushList();

  return <>{renderedContent}</>;
}

type Annotation = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type RichText = {
  plain_text: string;
  annotations: Annotation;
  href?: string | null;
};

function renderRichText(text: RichText, key: number, returnPlainText: boolean = false) {
  if (returnPlainText) return text.plain_text
  let content: JSX.Element = <>{text.plain_text}</>;

  if (text.href) {
    content = <a href={text.href}>{content}</a>;
  }

  if (text.annotations.code) {
    content = <code>{content}</code>;
  }

  if (text.annotations.bold) {
    content = <strong>{content}</strong>;
  }

  if (text.annotations.italic) {
    content = <em>{content}</em>;
  }

  if (text.annotations.underline) {
    content = <u>{content}</u>;
  }

  if (text.annotations.strikethrough) {
    content = <s>{content}</s>;
  }

  return <React.Fragment key={key}>{content}</React.Fragment>;
}