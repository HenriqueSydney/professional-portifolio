import { NotionImageProcessor } from "./NotionImageProcessor";
import { makeS3StorageService } from "@/services/s3Client/makeS3StorageService";

export function makeNotionImageProcessor() {
  const r2Storage = makeS3StorageService();
  return new NotionImageProcessor(r2Storage);
}
