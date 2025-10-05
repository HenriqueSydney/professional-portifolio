/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */

import hljs from "highlight.js/lib/core";
import Image from "next/image";
import React, { JSX } from "react";

import { CopyToClipboard } from "@/components/CopyToClipbord";

import { apiLogger } from "@/lib/logger";

import { normalizeId } from "./normalizeId";
import dynamic from "next/dynamic";
import { Code } from "@/components/Code";
import { loadLanguage } from "./loadCodeLanguageLib";

type Block = {
  id: string;
  type: string;
  [key: string]: any;
};

const blockRenderers: Record<string, (block: Block) => JSX.Element> = {
  paragraph: (block) => (
    <p key={block.id}>
      {block.paragraph.rich_text.map((text: any, i: number) =>
        renderRichText(text, i)
      )}
    </p>
  ),

  heading_1: (block) => (
    <h1
      key={block.id}
      id={`id_${normalizeId(block.id)}`}
      className="text-3xl md:text-4xl font-bold mb-1 mt-3 md:mb-3 md:mt-6"
    >
      {block.heading_1.rich_text.map((text: any, i: number) => (
        <React.Fragment key={i}>{text.plain_text}</React.Fragment>
      ))}
    </h1>
  ),

  heading_2: (block) => (
    <h2
      key={block.id}
      id={`id_${normalizeId(block.id)}`}
      className="text-xl md:text-2xl font-bold mb-1 mt-3 md:mb-3 md:mt-6"
    >
      {block.heading_2.rich_text.map((text: any, i: number) => (
        <React.Fragment key={i}>{text.plain_text}</React.Fragment>
      ))}
    </h2>
  ),

  heading_3: (block) => (
    <h3
      key={block.id}
      id={`id_${normalizeId(block.id)}`}
      className="text-lg md:text-xl font-bold mb-1 mt-3 md:mb-3 md:mt-6"
    >
      {block.heading_3.rich_text.map((text: any, i: number) =>
        renderRichText(text, i)
      )}
    </h3>
  ),

  bulleted_list_item: (block) => (
    <li key={block.id} className="ml-4 list-disc">
      {block.bulleted_list_item.rich_text.map((text: any, i: number) =>
        renderRichText(text, i)
      )}
    </li>
  ),

  numbered_list_item: (block) => (
    <li key={block.id} className="ml-4 list-decimal">
      {block.numbered_list_item.rich_text.map((text: any, i: number) =>
        renderRichText(text, i)
      )}
    </li>
  ),

  to_do: (block) => (
    <div key={block.id}>
      <label className="flex items-center gap-2">
        <input type="checkbox" defaultChecked={block.to_do.checked} readOnly />
        {block.to_do.rich_text.map((text: any, i: number) =>
          renderRichText(text, i)
        )}
      </label>
    </div>
  ),

  toggle: (block) => (
    <details key={block.id}>
      <summary>
        {block.toggle.rich_text.map((text: any, i: number) =>
          renderRichText(text, i)
        )}
      </summary>
    </details>
  ),

  quote: (block) => (
    <blockquote
      key={block.id}
      className="border-l-4 border-gray-300 pl-4 italic my-4"
    >
      {block.quote.rich_text.map((text: any, i: number) =>
        renderRichText(text, i)
      )}
    </blockquote>
  ),

  callout: (block) => (
    <div
      key={block.id}
      className="bg-background rounded-lg border text-card-foreground shadow-sm p-4 my-4 flex items-start gap-2 hover:shadow-glow transition-all duration-300"
    >
      <span>{block.callout.icon?.emoji}</span>
      <div>
        {block.callout.rich_text.map((text: any, i: number) =>
          renderRichText(text, i)
        )}
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
    const codeContent = block.code.rich_text.map((text: any, i: number) =>
      renderRichText(text, i, true)
    )[0];
    const language = block.code.language;
    loadLanguage(language);

    return <Code id={block.id} code={codeContent} language={language} />;
  },
  divider: (block) => <hr key={block.id} className="my-0!" />,
  bookmark: (_) => <></>,
};

const LazyLinkPreview = dynamic(
  () => import("@/components/LinkPreview").then((mod) => mod.LinkPreview),
  {
    ssr: true,
    loading: () => (
      <div className="h-40 border rounded-lg animate-pulse bg-muted flex items-center justify-center">
        <span className="text-xs text-muted-foreground">
          Carregando preview...
        </span>
      </div>
    ),
  }
);

const AsynclockRenderers: Record<
  string,
  (block: Block) => Promise<JSX.Element>
> = {
  bookmark: async (block) => {
    const bookmarkUrl = block.bookmark.url;
    return (
      <LazyLinkPreview key={block.id} id={block.id} bookmarkUrl={bookmarkUrl} />
    );
  },
};

export async function renderNotionBlock(blocks: Block[]) {
  const renderedContent: React.ReactNode[] = [];
  let currentListType: "ul" | "ol" | null = null;
  let currentListItems: JSX.Element[] = [];
  let currentListId = "";

  const flushList = () => {
    if (currentListType && currentListItems.length > 0) {
      const ListTag = currentListType as "ul" | "ol";
      renderedContent.push(
        React.createElement(
          ListTag,
          { key: currentListId, className: "ml-4 my-2" },
          currentListItems
        )
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
        if (type == "bookmark") {
          renderedContent.push(await AsynclockRenderers[type](block));
        } else {
          renderedContent.push(renderer(block));
        }
      } else {
        apiLogger.warn(
          `Nenhum renderer encontrado para o tipo "${blockRenderers[type]}"`
        );
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

function renderRichText(
  text: RichText,
  key: number,
  returnPlainText: boolean = false
) {
  if (returnPlainText) return text.plain_text;
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
