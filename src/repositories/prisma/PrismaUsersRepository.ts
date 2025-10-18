import { Prisma, User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import {
  IUserRepository,
  UserWithAllInfo,
  UserWithSubscription,
} from "../IUsersRepository";
import { Pagination } from "@/@types/Pagination";

export class PrismaUsersRepository implements IUserRepository {
  async findUserById(userId: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  async findUserByIdAndReturnAllInfo(
    userId: string
  ): Promise<UserWithAllInfo | null> {
    const user = await prisma.user.findUnique({
      include: {
        accounts: true,
        newsLetterSubscription: true,
        sessions: true,
      },
      where: {
        id: userId,
      },
    });

    return user;
  }

  async fetchUsers(
    query: string = "",
    pagination?: Pagination
  ): Promise<{ totalOfRecords: number; users: UserWithSubscription[] }> {
    let where: Prisma.UserWhereInput = {};

    if (query) {
      where = {
        name: {
          contains: query.toLocaleLowerCase(),
          mode: "insensitive",
        },
      };
    }

    let paginationDefinition = {};
    if (pagination) {
      if (pagination.page || pagination.numberPerPage) {
        paginationDefinition = {
          skip: ((pagination.page ?? 1) - 1) * (pagination.numberPerPage ?? 10),
          take: pagination.numberPerPage,
        };
      }
    }

    const [totalOfRecords, users] = await Promise.all([
      prisma.user.count({ where }),
      prisma.user.findMany({
        include: {
          newsLetterSubscription: {
            select: {
              id: true,
            },
            where: {
              canceledAt: {
                equals: null,
              },
            },
          },
        },
        where,
        ...paginationDefinition,
      }),
    ]);

    return { totalOfRecords, users };
  }

  async deleteUser(userId: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }

  async countTotalUsers(): Promise<number> {
    const totalOfUsers = await prisma.user.count();
    return totalOfUsers;
  }
}
