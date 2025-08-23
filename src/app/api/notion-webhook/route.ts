/* eslint-disable @typescript-eslint/no-explicit-any */

import { notion } from "@/lib/notionClient";
import { getPostReadTime } from "@/services/notion/getPostReadTime";
import { titleToSlug } from "@/util/titleToSlug";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  try { 

    if (body.entity.type === "page" && ["page.created", "page.content_updated"].includes(body.type)) {
      const pageId = body.entity.id;

      // 1. Obtem informações da página
      const page = await notion.pages.retrieve({ page_id: pageId });
      const coverUrl = (page as any).cover?.external?.url ?? null;

      // 2. Extrai o tempo estimado de leitura
      const readTime = await getPostReadTime(pageId);

      // 3. Gera excerpt automático (primeiras 30 palavras)
      const blocks = await notion.blocks.children.list({ block_id: pageId });
      const text = blocks.results
        .map((block: any) =>
          block[block.type]?.rich_text?.map((t: any) => t.plain_text).join(" ") ?? ""
        )
        .join(" ");
      const excerpt = text.split(/\s+/).slice(0, 30).join(" ") + "...";
      const update = {
        page_id: pageId,
        properties: {
          Excerpt: {
            rich_text: [
              {
                text: {
                  content: excerpt,
                },
              },
            ],
          },
          Slug: {
            rich_text: [
              {
                text: {
                  content: titleToSlug({
                    title: (page as any).properties?.Title?.title[0]?.plain_text || "sem-titulo",
                    options: { lowercase: true, strict: true, separator: "-" },
                  }),
                },
              },
            ],
          },
          "Read Time": {
            number: readTime,
          },
          Published: {
            checkbox: false,
          },
          Date: {
            date: {
              start: new Date().toISOString(),
            },
          },
          Homepage: {
            checkbox: false,
          },
          Cover: {
            url: coverUrl,
          },
          Priority: {
            number: 1,
          },
          Tags: {
            multi_select: [],
          },
        },
      }

      // 4. Atualiza a própria página recém criada
      await notion.pages.update(update);

      console.log(`✅ Página ${pageId} atualizada com sucesso`);
    }
   

   
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro no webhook do Notion:", err);    
    return NextResponse.json({ error: "Erro interno no webhook" });
  }
}
