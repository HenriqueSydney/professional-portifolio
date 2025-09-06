import { IRedisClient } from "./IRedisClient";
import { RedisClient } from "./redis";

let redisClient: IRedisClient | null = null


export function makeRedisClient() {

  if (!redisClient) {
    redisClient = new RedisClient();

  }
  return redisClient

}