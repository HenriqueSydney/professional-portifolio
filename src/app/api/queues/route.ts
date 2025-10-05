import { handleErrors } from "@/errors/handleErrors";
import { apiLogger } from "@/lib/logger";
import { redisConnection } from "@/queues";
import { Queue } from "bullmq";
import { NextResponse } from "next/server";
import * as Jobs from "@/queues/jobs";

export async function GET() {
  const queueNames = [...Object.values(Jobs)];
  apiLogger.debug("Recuperando dados da fila");
  try {
    const queues = queueNames.map(
      (name) => new Queue(name.key, { connection: redisConnection })
    );

    const data = await Promise.all(
      queues.map(async (q) => ({
        name: q.name,
        isPaused: await q.isPaused(),
      }))
    );

    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = handleErrors(error);
    return NextResponse.json(
      { error: errorMessage },
      { status: errorMessage.status ?? 500 }
    );
  }
}
