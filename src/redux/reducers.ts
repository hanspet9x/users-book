import {combineReducers} from 'redux';
import {appLoadingReducer} from './appLoading/appLoading.redcr';

export const combinedReducer = combineReducers(appLoadingReducer);
