import { NextResponse } from "next/server"
import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository"

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const postId = searchParams.get("postId")!
    const page = parseInt(searchParams.get("page") || "1", 10)
    const numberPerPage = parseInt(searchParams.get("numberPerPage") || "4", 10)

    const repo = makePostCommentsRepository()
    const result = await repo.fetchCommentsByPostId(postId, { page, numberPerPage })

    return NextResponse.json(result)
}
