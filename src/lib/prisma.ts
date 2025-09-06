
import { Prisma, PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

let logLevel: Prisma.LogLevel[] = ['error', 'warn'];

if (process.env.NODE_ENV === 'test') {
  logLevel = [...logLevel, 'info'];
}

if (process.env.NODE_ENV === 'development') {
  logLevel = [...logLevel, 'query'];
}

export const prisma =
    globalForPrisma.prisma || new PrismaClient({
      errorFormat: 'pretty',
      log: logLevel,
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma