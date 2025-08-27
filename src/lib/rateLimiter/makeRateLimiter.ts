import { IRateLimiter } from "./IRateLimiter";
import { RateLimiter } from "./RateLimiter";

let rateLimiter: IRateLimiter | null = null


export function makeRateLimiter() {

    if (!rateLimiter) {
        rateLimiter = new RateLimiter();

    }
    return rateLimiter

}