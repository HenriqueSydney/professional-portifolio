type IHttpClientResponse<T> = [Error, null] | [null, T];

export async function httpClient<T>(url: string, options?: RequestInit): Promise<IHttpClientResponse<T>> {
    if (!url) {
        return Promise.resolve([new Error("URL is required"), null]);
    }

    if(!options?.cache){
        options = {
            ...options,
            cache: "force-cache" // Default to no-cache if not specified
        };
    }

    if(!options?.next?.revalidate){
        options = {
            ...options,
            next: {
                revalidate: 60 * 60 * 24 // Default to 24 hours revalidation
            }
        };
    }

    try{
        const result = await fetch(url, options)

        if(result.ok) {
            const data = await result.json() as T;
            return [null, data];
        }

        return [new Error("Falha no retorno da requisição"), null];
    } catch (error) {
        return [error as Error, null];
    }    
}