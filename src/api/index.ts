import axios, { type AxiosResponse, type AxiosRequestConfig } from 'axios';

export enum HttpRequestMethod {
    Get = 'GET',
    Post = 'POST',
}

export const baseQuery = async <Response, Payload>(
    method: HttpRequestMethod,
    url: string,
    options: AxiosRequestConfig<Payload> = {},
): Promise<Response | null> => {
    try {
        const response = await axios<
            Response,
            AxiosResponse<Response, Payload>
        >({ method, url, ...options });
        return response.data;
    } catch (error) {
        console.error(error);
        return await Promise.reject(error);
    }
};

export * from './films.api';
