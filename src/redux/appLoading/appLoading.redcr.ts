import {IAction} from '../action.types';
import {IAppLoadingPayload} from './appLoading.action';

const initialState: IAppLoadingPayload = {
  toggle: false,
  message: '',
};
export const appLoadingReducer = (
    state = initialState,
    action: IAction<IAppLoadingPayload>) => {
  switch (action.type) {
    case 'appLoading':
      return {...state,
        toggle: action.payload.toggle,
        message: action.payload.message,
      };

    default:
      return state;
  }
};
