import {IAppLoadingPayload} from '../redux/appLoading/appLoading.action';
import {useAppDispatch} from '../redux/hooks/useSelector';

export const useAppLoading = () => {
  const dispatch = useAppDispatch<IAppLoadingPayload>();
  const set = (payload: IAppLoadingPayload) => {
    dispatch({type: 'appLoading', payload});
  };
  const onShow = (message: string) => set({toggle: true, message});
  const onHide = () => set({toggle: false, message: ''});
  return {onShow, onHide};
};
