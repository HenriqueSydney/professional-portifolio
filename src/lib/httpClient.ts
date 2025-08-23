type IHttpClientResponse<T> = [Error, null] | [null, T];

type HttpResponseType = 'json' | 'blob' | 'text' | 'arrayBuffer' | 'formData';

export async function httpClient<T>(url: string, options?: RequestInit, responseType: HttpResponseType = 'json'): Promise<IHttpClientResponse<T>> {
  if (!url) {
    return Promise.resolve([new Error("URL is required"), null]);
  }

  if (!options?.cache) {
    options = {
      ...options,
      cache: "force-cache" // Default to no-cache if not specified
    };
  }

  if (!options?.next?.revalidate) {
    options = {
      ...options,
      next: {
        revalidate: 60 * 60 * 24 // Default to 24 hours revalidation
      }
    };
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
      return [new Error(errorMessage), null];
    }

    // const contentType = response.headers.get('content-type') || '';

    let data: T | Blob | string | ArrayBuffer | FormData;

    switch (responseType) {
    case 'blob':
      data = await response.blob();
      break;
    case 'text':
      data = await response.text();
      break;
    case 'arrayBuffer':
      data = await response.arrayBuffer();
      break;
    case 'formData':
      data = await response.formData();
      break;
    case 'json':
    default:
      try {
        data = await response.json();
      } catch (jsonError) {
        // Se falhar ao parsear JSON, tenta como texto
        console.warn('Failed to parse as JSON, falling back to text');
        data = await response.text();
      }
      break;
    }

    return [null, data as T];
  } catch (error) {
    return [error as Error, null];
  }
}
