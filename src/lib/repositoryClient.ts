"use server";

import { operationWrapper, OperationWrapperOptions } from "./operationWrapper";

type RepositoryClientResponse<T> = [Error, null] | [null, T];

export async function repositoryClient<T>(
  repositoryNameAndMethod: string,
  callback: () => Promise<T>,
  options: OperationWrapperOptions = {}
): Promise<RepositoryClientResponse<T>> {
  return operationWrapper(
    "repository",
    repositoryNameAndMethod,
    callback,
    options
  );
}
