import { handleErrors } from "@/errors/handleErrors";
import { redisConnection } from "@/queues";
import { Job, JobType, Queue } from "bullmq";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ name: string }>;
  }
) {
  const { name } = await params;
  try {
    const queue = new Queue(name, {
      connection: redisConnection,
    });

    let jobs: Job<any, any, string>[] = [];

    const { searchParams } = new URL(req.url);
    const stats = searchParams.get("stats") as JobType | null;

    if (stats) {
      const allJobs = await queue.getJobs([stats]);
      jobs = [...allJobs];
    } else {
      const allJobs = await queue.getJobs([
        "completed",
        "active",
        "waiting",
        "failed",
        "delayed",
        "prioritized",
        "waiting-children",
        "paused",
      ]);
      jobs = [...allJobs];
    }

    const jobsResponse = await Promise.all(
      jobs.map(async (job) => {
        const state = await job.getState();
        return {
          id: job.id,
          name: job.name,
          data: job.data,
          state,
          progress: job.progress,
          timestamp: job.timestamp,
        };
      })
    );

    return NextResponse.json(jobsResponse);
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
