import {AppStrings} from '../../../common/string';
import {IDialogProps} from '../../../containers/dialog/dialog.types';
import {useAppLoading} from '../../../hooks/useAppLoading';
import {navigate} from '../../../navigations/navigations';
import {ICartProp as ICheckoutProp} from '../../../pages/cart/cart.types';
import {wrapError} from '../../../utils/utils';
import BookService from '../BookService';


export const useGetCheckoutURL = () => {
  const {onShow, onHide} = useAppLoading();
  // get checkout URL
  const get = async (genreURL: string, retry?: boolean) => {
    console.log('URL', genreURL);
    try {
      // show loading
      onShow(AppStrings.genre.getCartURL);
      const {data, message, status} = await BookService
          .getBookCheckoutLink(genreURL, retry);
      // hide loading
      onHide();
      if (data) {
      // navigate to cartURL
        navigate<ICheckoutProp>('Cart', {genreURL: data});
      } else {
        // an error or timeout occured
        // callback called if timeout occur
        const dialogRetryGetURL = async (status: number) => {
          if (BookService.REQUEST_TIMEOUT === status) {
            await get(genreURL, true);
          }
        };
        // prepare dialog
        let dialog: IDialogProps = {title: 'Error', description: message};
        if (status === BookService.REQUEST_TIMEOUT) {
          dialog = {
            ...dialog,
            title: 'Time out',
            callback: dialogRetryGetURL,
            extra: status,
          };
        }
        // show dialog
        navigate<IDialogProps>('Dialog', dialog);
      }
      // return data null type
      return {data, message};
    } catch (error) {
      return {data: null, message: wrapError(error).message};
    }
  };
  return get;
};
