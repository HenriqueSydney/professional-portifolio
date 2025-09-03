import { date } from "@/lib/dayjs"

export function getOptimisticLikeDelta(alreadyLiked?: Date | null) {
    if (!alreadyLiked) return +1

    const lastLiked = date(alreadyLiked)
    const diffInMinutes = date().diff(lastLiked, "minute")

    return diffInMinutes < 30 ? -1 : +1
}