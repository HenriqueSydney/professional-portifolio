import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { makePostsRepository } from "@/repositories/factories/makePostsRepository";
import { CreateAndUpdatePostUseCase } from "../CreateAndUpdatePostUseCase";

export function makeCreateAndUpdatePostUseCase() {
  const redisClient = makeRedisClient();
  const postsRepository = makePostsRepository();
  const createAndUpdatePost = new CreateAndUpdatePostUseCase(
    redisClient,
    postsRepository
  );
  return createAndUpdatePost;
}
