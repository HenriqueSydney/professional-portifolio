import { Posts, PostStatus, Prisma, TranslatedModel } from "@/generated/prisma";
import { apiLogger } from "@/lib/logger";
import { notion } from "@/lib/notion/notion";
import { makeNotionImageProcessor } from "@/lib/notion/NotionImageProcessor/makeNotionImageProcessor";
import { IRedisClient } from "@/lib/redis/IRedisClient";
import { repositoryClient } from "@/lib/repositoryClient";
import { IPostsRespository } from "@/repositories/IPostsRepository";
import { checkDeeplUsage } from "@/services/internacionalization/checkDeeplUsage";
import { translateTextWithDeepl } from "@/services/internacionalization/translateTextWithDeepl";
import { getPostReadTime } from "@/services/notion/getPostReadTime";
import { deeplXmlToNotionJson } from "@/util/deeplXmlToNotionJson";
import { notionJsonToDeeplXml } from "@/util/notionJsonToDeeplXml";
import { titleToSlug } from "@/util/titleToSlug";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client";
import { revalidatePath } from "next/cache";

interface ICreateAndUpdatePostUseCaseParams {
  pageId: string;
}

interface ITranslatePostData {
  title: string;
  excerpt: string;
  blocksResult: (PartialBlockObjectResponse | BlockObjectResponse)[];
}

const SAFE_CHAR_SUM = 500;
export class CreateAndUpdatePostUseCase {
  constructor(
    private redisClient: IRedisClient,
    private postsRepository: IPostsRespository
  ) {}

  async execute({ pageId }: ICreateAndUpdatePostUseCaseParams): Promise<Posts> {
    const page = await notion.pages.retrieve({ page_id: pageId });

    const title =
      (page as any).properties.Title.title[0]?.plain_text ?? "Sem título";

    const slug = titleToSlug({
      title,
      options: { lowercase: true, strict: true, separator: "-" },
    });
    const category = (page as any).properties?.Category?.select?.name ?? "";
    const coverUrl = (page as any).properties?.Cover?.url ?? "";
    const tags = (page as any).properties?.Tags?.multi_select?.map(
      (tag: any) => tag.name
    );
    const featured = (page as any).properties?.Homepage?.checkbox;
    const priority = (page as any).properties?.Priority?.number;

    const isPublished = (page as any).properties?.Published?.checkbox;
    const isArchived = (page as any).properties?.Archived?.checkbox;

    const status =
      !isPublished && !isArchived
        ? PostStatus.DRAFT
        : isPublished && !isArchived
          ? PostStatus.PUBLISHED
          : PostStatus.ARCHIVED;

    apiLogger.info({ title, pageId }, `Page creation or update received`);

    // 2. Extrai o tempo estimado de leitura
    let [readTimeError, readTime] = await getPostReadTime(pageId);

    if (readTimeError || !readTime) readTime = 0;

    // 3. Gera excerpt automático (primeiras 30 palavras)
    const blocks = await notion.blocks.children.list({ block_id: pageId });

    const imageProcessor = makeNotionImageProcessor();
    const blocksWithR2Images = await imageProcessor.processImages({
      blocks: blocks.results,
      postSlug: slug,
    });
    let finalCoverUrl = coverUrl;
    if (coverUrl) {
      finalCoverUrl = await imageProcessor.processUrl(coverUrl, slug);
    }

    const text = blocks.results
      .map(
        (block: any) =>
          block[block.type]?.rich_text
            ?.map((t: any) => t.plain_text)
            .join(" ") ?? ""
      )
      .join(" ");

    const excerpt = text.split(/\s+/).slice(0, 400).join(" ");
    const finalExcerpt =
      excerpt.length > 500 ? excerpt.substring(0, 497) + "..." : excerpt;

    const {
      translatedTitle,
      translatedSlug,
      finalTranslatedExcept,
      blockTranslatedToEnglish,
    } = await this.translatePostData({
      title,
      excerpt: finalExcerpt,
      blocksResult: blocksWithR2Images,
    });

    const [postUpsertError, post] = await repositoryClient(
      "postRepository.upsertByNotionId",
      () =>
        this.postsRepository.upsertByNotionId({
          notionId: pageId,
          title,
          title_en: translatedTitle,
          slug,
          slug_en: translatedSlug,
          category,
          tags,
          coverUrl: finalCoverUrl,
          excerpt_pt: finalExcerpt,
          excerpt_en: finalTranslatedExcept,
          readTime,
          featured,
          priority: priority ?? 10,
          translatedModel: blockTranslatedToEnglish
            ? TranslatedModel.DEEPL
            : null,
          ptBr: blocksWithR2Images.filter(
            (block): block is BlockObjectResponse => "type" in block
          ),
          en: blockTranslatedToEnglish
            ? ((
                blockTranslatedToEnglish.blocks as unknown as (
                  | PartialBlockObjectResponse
                  | BlockObjectResponse
                )[]
              ).filter(
                (block): block is BlockObjectResponse => "type" in block
              ) as unknown as Prisma.InputJsonValue)
            : Prisma.JsonNull,
          status,
        }),
      {
        cache: "revalidate-tags",
      }
    );

    //  revalidatePaths: [
    //       `/blog`,
    //       `/blog/post/${slug}`,
    //       `/en/blog`,
    //       `/en/blog/post/${slug}`,
    //       `/blog/post/${translatedSlug}`,
    //       `/en/blog/post/${translatedSlug}`,
    //     ],

    if (postUpsertError) {
      throw postUpsertError;
    }

    let cacheTags = ["blog-posts", `blog-post-${slug}`];
    if (translatedSlug) {
      cacheTags = [`blog-post-${translatedSlug}`, ...cacheTags];
    }

    this.redisClient.invalidateCacheByTags(`repository:tag`, cacheTags);
    this.redisClient.invalidateCacheByTags(`notion:tag`, cacheTags);

    return post;
  }

  private async translatePostData({
    title,
    excerpt,
    blocksResult,
  }: ITranslatePostData) {
    const [usageCheckError, doesStillHaveCreditsInDeepL] =
      await checkDeeplUsage();

    let blockTranslatedToEnglish = null;
    let translatedSlug: string | null = null;
    let finalTranslatedExcept: string | null = null;
    let translatedTitle: string | null = null;

    const contentToDeepl = notionJsonToDeeplXml({ blocks: blocksResult });
    const estimatedQuota =
      contentToDeepl.length + title.length + excerpt.length + SAFE_CHAR_SUM;

    if (
      !usageCheckError &&
      doesStillHaveCreditsInDeepL.remainingQuota > estimatedQuota
    ) {
      const [translatedXml, finalTranslatedTitle, translatedExcept] =
        await Promise.all([
          translateTextWithDeepl({
            content: contentToDeepl,
          }),
          translateTextWithDeepl({
            content: title,
          }),
          translateTextWithDeepl({
            content: excerpt,
          }),
        ]);

      if (finalTranslatedTitle) {
        translatedTitle = finalTranslatedTitle;
        translatedSlug = titleToSlug({
          title: finalTranslatedTitle,
          options: { lowercase: true, strict: true, separator: "-" },
        });
      }

      if (translatedExcept) {
        finalTranslatedExcept =
          translatedExcept.length > 500
            ? translatedExcept.substring(0, 497) + "..."
            : translatedExcept;
      }

      if (translatedXml) {
        blockTranslatedToEnglish = deeplXmlToNotionJson(
          { blocks: blocksResult },
          translatedXml
        );
      }
    }

    return {
      translatedTitle,
      translatedSlug,
      finalTranslatedExcept,
      blockTranslatedToEnglish,
    };
  }
}
