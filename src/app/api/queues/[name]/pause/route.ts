import { handleErrors } from "@/errors/handleErrors";
import { redisConnection } from "@/queues";
import { Queue } from "bullmq";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  try {
    const queue = new Queue(name, {
      connection: redisConnection,
    });

    await queue.pause();

    return NextResponse.json({ message: "Job paused successfuly" });
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
