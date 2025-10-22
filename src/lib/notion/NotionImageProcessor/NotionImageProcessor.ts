// src/services/notion/processNotionImages.ts

import { apiLogger } from "@/lib/logger";
import {
  INotionImageProcessor,
  IProcessNotionImagesParams,
} from "./INotionImageProcessor";
import { IS3StorageService } from "@/services/s3Client/IS3StorageService";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client";
import { createHash } from "node:crypto";

export class NotionImageProcessor implements INotionImageProcessor {
  constructor(private r2Storage: IS3StorageService) {}

  /**
   * Processa todos os blocos e substitui URLs do Notion por URLs do R2
   */
  async processImages(
    params: IProcessNotionImagesParams
  ): Promise<(PartialBlockObjectResponse | BlockObjectResponse)[]> {
    const { blocks, postSlug } = params; // ✅ Desestruturar aqui

    const processedBlocks = await Promise.all(
      blocks.map((block) => this.processBlock(block, postSlug))
    );

    return processedBlocks;
  }
  /**
   * Processa um bloco individual
   */
  private async processBlock(
    block: PartialBlockObjectResponse | BlockObjectResponse,
    postSlug: string
  ): Promise<PartialBlockObjectResponse | BlockObjectResponse> {
    if (!("type" in block)) return block;

    const blockCopy = JSON.parse(JSON.stringify(block));

    try {
      // Processa imagens
      if (block.type === "image" && "image" in block) {
        const imageUrl = this.getImageUrl(block.image);
        if (imageUrl && this.isNotionUrl(imageUrl)) {
          const newUrl = await this.uploadImageToR2(imageUrl, postSlug);
          this.setImageUrl(blockCopy.image, newUrl);
        }
      }

      // Processa vídeos
      if (block.type === "video" && "video" in block) {
        const videoUrl = this.getVideoUrl(block.video);
        if (videoUrl && this.isNotionUrl(videoUrl)) {
          const newUrl = await this.uploadImageToR2(videoUrl, postSlug);
          this.setVideoUrl(blockCopy.video, newUrl);
        }
      }

      // Processa files
      if (block.type === "file" && "file" in block) {
        const fileUrl = this.getFileUrl(block.file);
        if (fileUrl && this.isNotionUrl(fileUrl)) {
          const newUrl = await this.uploadImageToR2(fileUrl, postSlug);
          this.setFileUrl(blockCopy.file, newUrl);
        }
      }

      // Processa blocos com children (recursivo)
      if ("has_children" in block && block.has_children) {
        // Aqui você pode buscar os children e processar recursivamente
        // const children = await notion.blocks.children.list({ block_id: block.id });
        // blockCopy.children = await this.processImages({ blocks: children.results, postSlug });
      }
    } catch (error) {
      apiLogger.error(
        { error, blockId: block.id },
        "Error processing block images"
      );
    }

    return blockCopy;
  }

  /**
   * Processa uma URL individual de imagem/vídeo/arquivo
   */
  async processUrl(url: string, postSlug: string): Promise<string> {
    if (!this.isNotionUrl(url)) {
      return url;
    }
    return await this.uploadImageToR2(url, postSlug);
  }

  /**
   * Faz upload da imagem para o R2
   */
  private async uploadImageToR2(
    imageUrl: string,
    postSlug: string
  ): Promise<string> {
    try {
      // 1. Baixa a imagem do Notion
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      const contentType = response.headers.get("content-type") || "image/jpeg";

      // 2. Gera nome único para o arquivo
      const extension = this.getExtensionFromContentType(contentType);
      const hash = createHash("md5")
        .update(imageUrl)
        .digest("hex")
        .substring(0, 8);
      const fileName = `${Date.now()}-${hash}${extension}`;
      const key = `blog/${postSlug}/${fileName}`;

      // 3. Upload para o R2
      const r2Url = await this.r2Storage.upload(buffer, key, contentType);

      apiLogger.info({ originalUrl: imageUrl, r2Url }, "Image uploaded to R2");

      return r2Url;
    } catch (error) {
      apiLogger.error({ error, imageUrl }, "Failed to upload image to R2");
      // Retorna URL original em caso de erro
      return imageUrl;
    }
  }

  /**
   * Verifica se é uma URL do Notion (temporária)
   */
  private isNotionUrl(url: string): boolean {
    return (
      url.includes("prod-files-secure.s3") ||
      url.includes("s3.us-west-2.amazonaws.com") ||
      url.includes("notion.so")
    );
  }

  /**
   * Extrai URL de um bloco de imagem
   */
  private getImageUrl(image: any): string | null {
    if (image.type === "external") {
      return image.external.url;
    }
    if (image.type === "file") {
      return image.file.url;
    }
    return null;
  }

  /**
   * Define nova URL em um bloco de imagem
   */
  private setImageUrl(image: any, url: string): void {
    if (image.type === "external") {
      image.external.url = url;
    } else if (image.type === "file") {
      image.file.url = url;
    }
  }

  /**
   * Extrai URL de um bloco de vídeo
   */
  private getVideoUrl(video: any): string | null {
    if (video.type === "external") {
      return video.external.url;
    }
    if (video.type === "file") {
      return video.file.url;
    }
    return null;
  }

  /**
   * Define nova URL em um bloco de vídeo
   */
  private setVideoUrl(video: any, url: string): void {
    if (video.type === "external") {
      video.external.url = url;
    } else if (video.type === "file") {
      video.file.url = url;
    }
  }

  /**
   * Extrai URL de um bloco de arquivo
   */
  private getFileUrl(file: any): string | null {
    if (file.type === "external") {
      return file.external.url;
    }
    if (file.type === "file") {
      return file.file.url;
    }
    return null;
  }

  /**
   * Define nova URL em um bloco de arquivo
   */
  private setFileUrl(file: any, url: string): void {
    if (file.type === "external") {
      file.external.url = url;
    } else if (file.type === "file") {
      file.file.url = url;
    }
  }

  /**
   * Obtém extensão do arquivo baseado no Content-Type
   */
  private getExtensionFromContentType(contentType: string): string {
    const extensions: Record<string, string> = {
      "image/jpeg": ".jpg",
      "image/jpg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
      "image/webp": ".webp",
      "image/svg+xml": ".svg",
      "video/mp4": ".mp4",
      "video/webm": ".webm",
      "application/pdf": ".pdf",
    };

    return extensions[contentType] || ".jpg";
  }
}
