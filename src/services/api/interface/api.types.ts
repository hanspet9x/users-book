export interface IResponse<T> {
    data: T;
    status: number;
    statusText: "failed" | "success";
    error: boolean;
}