import { prisma } from "@/lib/prisma";
import { IPostMetricsRepository } from "../IPostMetricsRepository";
import { PostMetrics } from "@/generated/prisma";

export class PrismaPostMetricsRepository implements IPostMetricsRepository {
    async findPostMetricsByPostId(id: string): Promise<PostMetrics | null> {
        const postMetrics = await prisma.postMetrics.findUnique({
            where: {
                id
            }
        })

        return postMetrics
    }
    async incrementLikeToPostByPostId(id: string, userId: string): Promise<void> {
        await prisma.$transaction([
            prisma.postMetrics.upsert({
                where: { id },
                create: {
                    id,
                    numberOfLikes: 1, // se não existir, já começa com 1
                },
                update: {
                    numberOfLikes: {
                        increment: 1, // se existir, incrementa
                    },
                },
            }),
            prisma.postLikes.create({
                data: {
                    userId,
                    postId: id
                }
            })
        ])
    }

    async decrementLikeToPostByPostId(id: string, userId: string): Promise<void> {
        await prisma.$transaction([
            prisma.postMetrics.update({
                data: {
                    numberOfLikes: {
                        decrement: 1,
                    },
                },
                where: {
                    id
                }
            }),
            prisma.postLikes.delete({
                where: {
                    userId_postId: {
                        userId,
                        postId: id
                    }
                }
            })
        ])
    }

    async incrementLikeOfANotLoggedUserToToPostByPostId(id: string): Promise<void> {
        await prisma.postMetrics.upsert({
            where: { id },
            create: {
                id,
                numberOfLikes: 1, // se não existir, já começa com 1
            },
            update: {
                numberOfLikes: {
                    increment: 1, // se existir, incrementa
                },
            },
        })

    }

    async decrementLikeOfANotLoggedUserToPostByPostId(id: string): Promise<void> {
        await prisma.postMetrics.update({
            data: {
                numberOfLikes: {
                    decrement: 1,
                },
            },
            where: {
                id
            }
        })

    }

    async incrementViewsToPostByPostId(id: string): Promise<PostMetrics> {
        const postMetrics = await prisma.postMetrics.upsert({
            where: { id },
            create: {
                id,
                numberOfViews: 1, // se não existir, já começa com 1
            },
            update: {
                numberOfViews: {
                    increment: 1, // se existir, incrementa
                },
            },
        })
        return postMetrics

    }



}