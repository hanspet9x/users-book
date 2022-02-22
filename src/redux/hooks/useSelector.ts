import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {IAction} from '../action.types';
import {IRootState} from '../state.types';

export const useAppSelector = (key: keyof IRootState) => {
  return useSelector((state: IRootState) => state[key]);
};

export const useAppDispatch = <T>() => {
  const dispatch = useDispatch();
  return (action: IAction<T>) => dispatch(action);
};
