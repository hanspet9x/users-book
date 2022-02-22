import {IAction} from '../action.types';
import {IAppLoadingAction} from './appLoading.action';

const initialState: IAppLoadingAction = {
  toggle: false,
};
export const appLoadingReducer = (
    state = initialState,
    action: IAction<IAppLoadingAction>) => {
  switch (action.type) {
    case 'toggle':
      return {...state, toggle: action.payload};

    default:
      return state;
  }
};
