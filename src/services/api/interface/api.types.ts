export interface IResponse<T> {
    data: T;
    message: string;
    statusText: 'failed' | 'success';
    error: boolean;
    status: number;
}
