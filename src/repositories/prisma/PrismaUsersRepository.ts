import { User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import { IUserRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUserRepository {
  async findUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }

}