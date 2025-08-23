import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NOTION_API_KEY: z.string(),
  NOTION_DATABASE_ID: z.string(),
  SMTP_HOST: z.string(),
  SMTP_USER: z.string(),
  SMTP_PASSWORD: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REFRESH_TOKEN: z.string(),
  GOOGLE_EMAIL: z.email(),
  GOOGLE_APP_PASSWORD: z.string(),
  BASE_URL: z.string()
});

const env = envSchema.safeParse(process.env);

if (!env.success) {

  console.error('❌ Invalid environment variables:', env.error.format());
  throw new Error('Invalid environment variables');
}

export const envVariables = env.data;