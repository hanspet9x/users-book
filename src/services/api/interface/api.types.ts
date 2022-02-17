export interface IAPIResponse<T> {
    data: T;
    status: number;
    error: boolean;
}