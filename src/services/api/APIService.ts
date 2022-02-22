import {AppConfig} from '../../config/app.config';
import {LogService} from '../log/LogService';
import {IResponse} from './interface/api.types';

export class APIService {
  static BASE_URL = AppConfig.HOST + AppConfig.BASE_PATH;

  static NOT_FOUND = 404;
  static REQUEST_TIMEOUT = 408;
  static UNPROCESSABLE = 422;

  static async get<R>({
    url,
    baseUrl,
    headers,
    cache,
  }: {
    url: string;
    baseUrl?: string;
    headers?: any;
    cache?: boolean;
  }): Promise<IResponse<R>> {
    console.log('API');
    return await APIService.api<R>(
      baseUrl ? baseUrl + url : APIService.BASE_URL + url,
      {headers, cache: 'force-cache'},
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
      console.log('>>>>>>>>', url);
      const res = await fetch(url, nRequest);
      console.log(res);
      const data = await res.json() as IResponse<T>;
      console.log(data);
      data.status = res.status;
      return data as IResponse<T>;
    } catch (error: any) {
      LogService.error(error);
      throw new Error(error);
    }
  }
}
