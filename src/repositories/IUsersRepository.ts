import { User } from "@/generated/prisma";

export interface IUserRepository {
    findUserById(id: string): Promise<User | null>
}