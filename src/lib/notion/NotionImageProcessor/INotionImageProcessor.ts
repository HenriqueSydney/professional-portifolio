// src/interfaces/INotionImageProcessor.ts
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client";

export interface IProcessNotionImagesParams {
  blocks: (PartialBlockObjectResponse | BlockObjectResponse)[];
  postSlug: string;
}

export interface INotionImageProcessor {
  /**
   * Processa todos os blocos e substitui URLs do Notion por URLs do R2
   * @param params - Parâmetros contendo os blocos e slug do post
   * @returns Array de blocos com URLs atualizadas
   */
  processImages(
    params: IProcessNotionImagesParams
  ): Promise<(PartialBlockObjectResponse | BlockObjectResponse)[]>;

  /**
   * Processa uma URL individual de imagem/vídeo/arquivo
   * @param url - URL original do Notion
   * @param postSlug - Slug do post para organização
   * @returns URL do arquivo no R2
   */
  processUrl(url: string, postSlug: string): Promise<string>;
}
