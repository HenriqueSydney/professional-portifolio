import { User } from "@/generated/prisma";
import { IUserRepository } from "../IUsersRepository";
import { prisma } from "@/lib/prisma";

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