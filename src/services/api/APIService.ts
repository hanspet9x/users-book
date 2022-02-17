import { IAPIResponse } from "./interface/api.types";

export class APIService {
  static BASE_URL = "http://localhost:3000/books/";

  static async get<R>({
    url,
    baseUrl,
    headers,
  }: {
    url: string;
    baseUrl?: string;
    headers?: any;
  }): Promise<IAPIResponse<R>> {
    return await APIService.api<R>(
      baseUrl ? baseUrl + url : APIService.BASE_URL + url,
      { headers }
    );
  }

  static async post<T, R>(
    url: string,
    data: T,
    headers?: any
  ): Promise<IAPIResponse<R>> {
    return await APIService.api<R>(url, {
      headers,
      body: JSON.stringify(data),
    });
  }

  private static async api<T>(
    url: string,
    request: RequestInit
  ): Promise<IAPIResponse<T>> {
    const nRequest: RequestInit = {
      ...request,
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    };
    try {
      const res = await fetch(url, nRequest);
      if (res.status >= 200 && res.status <= 299) {
        const data = await res.json();
        return { data: data as T, error: false, status: res.status };
      }
      throw new Error([res.statusText, res.status].join("#"));
    } catch (error: any) {
      const [data, status] = error.message + "".split("#");
      return {
        data,
        error: true,
        status,
      };
    }
  }
}
