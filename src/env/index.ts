import z from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  NOTION_API_KEY: z.string(),
  NOTION_DATABASE_ID: z.string(),
  NOTION_WEBHOOK_SECRET: z.string(),
  SMTP_HOST: z.string(),
  SMTP_USER: z.string(),
  SMTP_PASSWORD: z.string(),
  REDIS_HOST: z.string(),
  REDIS_PORT: z.string(),
  REDIS_PASSWORD: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REFRESH_TOKEN: z.string(),
  GOOGLE_EMAIL: z.email(),
  GOOGLE_APP_PASSWORD: z.string(),
  BASE_URL: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  AUTH_SECRET: z.string(),
  LINK_PREVIEW: z.string(),
  CACHE_ENABLED: z.coerce.boolean().default(true),
  DEEPL_API_URL: z.url(),
  DEEPL_API_KEY: z.string(),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("❌ Invalid environment variables:", env.error.format());
  throw new Error("Invalid environment variables");
}

export const envVariables = env.data;
