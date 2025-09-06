import { Pagination } from "@/@types/Pagination";

import { PostComments,Prisma } from "@/generated/prisma";
import { date } from "@/lib/dayjs";
import { prisma } from "@/lib/prisma";

import { IPostCommentsReposity, PostCommentesWithUser } from "../IPostCommentsRepository";

export class PrismaPostCommentsRepository implements IPostCommentsReposity {

  async create(data: Prisma.PostCommentsUncheckedCreateInput): Promise<PostComments> {
    const [postComment] = await prisma.$transaction([
      prisma.postComments.create({
        data: {
          userId: data.userId,
          postId: data.postId,
          comment: data.comment
        }
      }),
      prisma.postMetrics.update({
        data: {
          totalOfComments: {
            increment: 1
          }
        },
        where: {
          id: data.postId,
        }
      })
    ])

    return postComment

  }

  async update(data: Prisma.PostCommentsUncheckedUpdateInput & { id: number }): Promise<PostComments> {
    const postComment = await prisma.postComments.update({
      data: {
        comment: data.comment,
        updatedAt: date().toDate()
      },
      where: {
        id: data.id
      }
    })

    return postComment
  }

  async deleteById(id: number): Promise<void> {
    const postCommentData = await prisma.postComments.findUnique({
      where: {
        id
      }
    })

    if (!postCommentData) return

    await prisma.$transaction([
      prisma.postComments.delete({
        where: {
          id
        }
      }),
      prisma.postCommentsLikes.deleteMany({
        where: {
          postCommentId: id
        }
      }),
      prisma.postMetrics.update({
        data: {
          totalOfComments: {
            decrement: 1
          }
        },
        where: {
          id: postCommentData.postId,
        }
      })

    ])

  }



  async findPostCommentById(id: number): Promise<PostComments | null> {
    const postComment = prisma.postComments.findUnique({
      where: {
        id
      }
    })

    return postComment
  }


  async fetchCommentsByPostId(postId: string, pagination: Pagination): Promise<{ postComments: PostCommentesWithUser[], totalOfRecords: number }> {

    let paginationDefinition = {}
    if (pagination) {
      if (pagination.page || pagination.numberPerPage) {
        paginationDefinition = {
          skip: ((pagination.page ?? 1) - 1) * (pagination.numberPerPage ?? 10),
          take: pagination.numberPerPage,
        }
      }
    }

    const [totalOfRecords, postComments] = await prisma.$transaction([
      prisma.postComments.count({
        where: {
          postId
        },
      }),
      prisma.postComments.findMany({
        where: {
          postId
        },
        include: {
          user: true
        },
        ...paginationDefinition,
        orderBy: {
          updatedAt: 'desc',
        }
      })
    ])

    return { postComments, totalOfRecords }
  }

  async incrementLikeToCommentByCommentId(id: number, userId: string): Promise<void> {
    await prisma.$transaction([
      prisma.postComments.update({
        data: {
          numberOfLikes: {
            increment: 1,
          },
        },
        where: {
          id
        }
      }),
      prisma.postCommentsLikes.create({
        data: {
          userId,
          postCommentId: id
        }
      })
    ])
  }

  async decrementLikeToCommentByCommentId(id: number, userId: string): Promise<void> {
    await prisma.$transaction([
      prisma.postComments.update({
        data: {
          numberOfLikes: {
            decrement: 1,
          },
        },
        where: {
          id
        }
      }),
      prisma.postCommentsLikes.delete({
        where: {
          userId_postCommentId: {
            userId,
            postCommentId: id
          }
        }
      })
    ])
  }

  async incrementLikeOfANotLoggedUserToCommentByCommentId(id: number): Promise<void> {
    await prisma.$transaction([
      prisma.postComments.update({
        data: {
          numberOfLikes: {
            increment: 1,
          },
        },
        where: {
          id
        }
      })
    ])
  }

  async decrementLikeOfANotLoggedUserToCommentByCommentId(id: number): Promise<void> {
    await prisma.$transaction([
      prisma.postComments.update({
        data: {
          numberOfLikes: {
            decrement: 1,
          },
        },
        where: {
          id
        }
      })
    ])
  }


}