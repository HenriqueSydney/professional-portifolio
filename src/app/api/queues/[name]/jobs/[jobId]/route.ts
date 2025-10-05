import { AppError } from "@/errors/AppError";
import { handleErrors } from "@/errors/handleErrors";
import { redisConnection } from "@/queues";
import { Queue } from "bullmq";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ name: string; jobId: string }> }
) {
  const { name, jobId } = await params;
  try {
    const queue = new Queue(name, {
      connection: redisConnection,
    });

    const job = await queue.getJob(jobId);

    if (!job) {
      throw new AppError("Job not found");
    }

    await job.remove();

    return NextResponse.json({ success: "Job deleted successfully" });
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
