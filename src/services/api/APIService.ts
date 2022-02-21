import {IResponse} from './interface/api.types';

export class APIService {
  static BASE_URL = 'http://localhost:3000/v1/books/';

  static NOT_FOUND = 404;
  static REQUEST_TIMEOUT = 408;
  static UNPROCESSABLE = 422;

  static async get<R>({
    url,
    baseUrl,
    headers,
  }: {
    url: string;
    baseUrl?: string;
    headers?: any;
  }): Promise<IResponse<R>> {
    return await APIService.api<R>(
      baseUrl ? baseUrl + url : APIService.BASE_URL + url,
      {headers},
    );
  }

  static async post<T, R>(
      url: string,
      data: T,
      headers?: any,
  ): Promise<IResponse<R>> {
    return await APIService.api<R>(url, {
      headers,
      body: JSON.stringify(data),
    });
  }

  private static async api<T>(
      url: string,
      request: RequestInit,
  ): Promise<IResponse<T>> {
    const nRequest: RequestInit = {
      ...request,
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
    };
    try {
      const res = await fetch(url, nRequest);
      const data = await res.json() as IResponse<T>;
      data.status = res.status;
      return data as IResponse<T>;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
