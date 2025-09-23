/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

import { apiLogger } from "@/lib/logger";

import { makeCreateAndUpdatePostUseCase } from "@/use-cases/factories/makeCreateAndUpdatePostUseCase";
import { envVariables } from "@/env";
import { makeCreateAndUpdateProfileInfoUseCase } from "@/use-cases/factories/makeCreateAndUpdateProfileInfoUseCase";
import { PROFILE_TYPE_BY_DATABASEID } from "@/mappers/ProfileDatabaseMapper";

type ProfileDatabaseId = keyof typeof PROFILE_TYPE_BY_DATABASEID;

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  try {
    const calculatedSignature = `sha256=${createHmac("sha256", envVariables.NOTION_WEBHOOK_SECRET).update(rawBody).digest("hex")}`;

    const signature = req.headers.get("x-notion-signature");
    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }
    const isTrustedPayload = timingSafeEqual(
      Buffer.from(calculatedSignature),
      Buffer.from(signature)
    );

    if (!isTrustedPayload) {
      return NextResponse.json({ error: "Not allowed" }, { status: 403 });
    }
  } catch (error) {
    console.error(error);
  }

  try {
    const body = JSON.parse(rawBody);
    const isEntityTypeEqualsPage = body.entity.type === "page";
    const isPropertyUpdate = body.type === "page.properties_updated";

    const isPostUpdate =
      isEntityTypeEqualsPage &&
      ["page.created", "page.content_updated"].includes(body.type);

    const isDatabaseUpdate = isEntityTypeEqualsPage && isPropertyUpdate;

    const pageId = body.entity.id;
    if (isDatabaseUpdate) {
      const databaseId: string = body.data.parent.id.replaceAll("-", "");
      const profileType =
        PROFILE_TYPE_BY_DATABASEID[databaseId as ProfileDatabaseId];

      if (!profileType) {
        apiLogger.error({ databaseId: databaseId }, "Database not mapped");
        return NextResponse.json(
          { error: "Database not mapped" },
          { status: 400 }
        );
      }

      const createAndUpdateProfileUseCase =
        makeCreateAndUpdateProfileInfoUseCase();

      await createAndUpdateProfileUseCase.execute({ profileType });

      apiLogger.info({ databaseId, profileType }, "Profile data updated");
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (isPostUpdate) {
      const createAndUpdatePost = makeCreateAndUpdatePostUseCase();
      const post = await createAndUpdatePost.execute(pageId);

      apiLogger.info(
        { title: post.title, pageId },
        `Page updated successfully`
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.log("Error", error);
    apiLogger.error({ stackTrace: error }, "Erro no webhook do Notion");
    return NextResponse.json(
      { error: "Erro interno no webhook" },
      { status: 500 }
    );
  }
}
