/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { JSX } from "react";

type Block = {
  id: string;
  type: string;
  [key: string]: any;
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
    <h1 key={block.id} className="text-3xl md:text-4xl font-bold mb-3 mt-6">
      {block.heading_1.rich_text.map((text: any, i: number) => (
        <React.Fragment key={i}>{text.plain_text}</React.Fragment>
      ))}
    </h1>
  ),

  heading_2: (block) => (
    <h2 key={block.id} className="text-xl md:text-2xl font-bold mb-3 mt-6">
      {block.heading_2.rich_text.map((text: any, i: number) => (
        <React.Fragment key={i}>{text.plain_text}</React.Fragment>
      ))}
    </h2>
  ),

  heading_3: (block) => (
    <h3 key={block.id} className="text-lg md:text-xl font-bold mb-3 mt-6">
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
        width={500}
        height={500}
        className="my-4 max-w-full h-auto"
      />
    </div>
  ),
};

export function renderNotionBlock(blocks: Block[]) {
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
      console.log(JSON.stringify(block, null, 2))
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
        renderedContent.push(renderer(block));
      } else {
        console.warn(`Nenhum renderer encontrado para o tipo "${JSON.stringify(block, null, 2)}"`);
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

function renderRichText(text: RichText, key: number) {
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