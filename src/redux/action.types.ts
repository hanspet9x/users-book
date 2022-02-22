import {IRootState} from './state.types';

export interface IAction<T> {
  type: keyof IRootState;
  payload: T;
};
