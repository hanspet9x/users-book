import {IAction} from '../action.types';
import {IAppLoadingState} from './appLoading.state';

const initialState: IAppLoadingState = {
  toggle: false,
  message: '',
};
export const appLoadingReducer = (
    state = initialState,
    action: IAction<IAppLoadingState>) => {
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
