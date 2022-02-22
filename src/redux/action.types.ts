export interface IAction<T> {
  type: keyof T;
  payload: Partial<T>;
};
