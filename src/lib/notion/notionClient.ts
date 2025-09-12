"use server";

import type { OperationWrapperOptions } from "@/@types/OperationWrapperTypes";
import { operationWrapper } from "../operationWrapper";

type NotionClientResponse<T> = [Error, null] | [null, T];

export async function notionClient<T>(
  operationName: string,
  callback: () => Promise<T>,
  options: OperationWrapperOptions = {}
): Promise<NotionClientResponse<T>> {
  return await operationWrapper("notion", operationName, callback, options);
}
