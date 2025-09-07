"use server";

import { operationWrapper, OperationWrapperOptions } from "../operationWrapper";

type NotionClientResponse<T> = [Error, null] | [null, T];

export async function notionClient<T>(
  operationName: string,
  callback: () => Promise<T>,
  options: OperationWrapperOptions = {}
): Promise<NotionClientResponse<T>> {
  return operationWrapper("notion", operationName, callback, options);
}
