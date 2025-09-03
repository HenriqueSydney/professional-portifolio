
import { IPostMetricsRepository } from "../IPostMetricsRepository";
import { PrismaPostMetricsRepository } from "../prisma/PrismaPostMetricsRepository";

let postMetricsRepo: IPostMetricsRepository | null = null

export function makePostMetricsRepository() {

    if (!postMetricsRepo) {
        postMetricsRepo = new PrismaPostMetricsRepository()
    }
    return postMetricsRepo

}