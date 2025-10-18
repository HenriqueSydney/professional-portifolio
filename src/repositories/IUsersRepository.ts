import { Pagination } from "@/@types/Pagination";
import {
  Account,
  NewsLetterSubscriptions,
  Prisma,
  User,
} from "@/generated/prisma";

export type UserWithSubscription = User & {
  newsLetterSubscription: {
    id: number;
  } | null;
};

export type UserWithAllInfo = Prisma.UserGetPayload<{
  include: {
    accounts: true;
    newsLetterSubscription: true;
    sessions: true;
  };
}>;
export interface IUserRepository {
  findUserById(userId: string): Promise<User | null>;
  findUserByIdAndReturnAllInfo(userId: string): Promise<UserWithAllInfo | null>;
  fetchUsers(
    query?: string,
    pagination?: Pagination
  ): Promise<{ totalOfRecords: number; users: UserWithSubscription[] }>;
  deleteUser(userId: string): Promise<void>;
  countTotalUsers(): Promise<number>;
}
