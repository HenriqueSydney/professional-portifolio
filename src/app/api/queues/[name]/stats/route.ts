import { handleErrors } from "@/errors/handleErrors";
import { redisConnection } from "@/queues";
import { Queue } from "bullmq";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  try {
    const queue = new Queue(name, {
      connection: redisConnection,
    });

    const counts = await queue.getJobCounts();

    return NextResponse.json(counts);
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
