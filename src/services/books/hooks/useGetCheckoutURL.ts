import {AppStrings} from '../../../common/string';
import {IDialogProps} from '../../../containers/dialog/dialog.types';
import {useAppLoading} from '../../../hooks/useAppLoading';
import {navigate} from '../../../navigations/navigations';
import {wrapError} from '../../../utils/utils';
import BookService from '../BookService';
import * as WebBrowser from 'expo-web-browser';


export const useGetCheckoutURL = () => {
  const {onShow, onHide} = useAppLoading();
  // get checkout URL
  const get = async (genreURL: string, retry?: boolean) => {
    try {
      // show loading
      onShow(AppStrings.genre.getCheckoutURL);
      const {data, message, status} = await BookService
          .getBookCheckoutLink(genreURL, retry);
      // hide loading
      onHide();
      if (data) {
      // open the browser
        await WebBrowser.openBrowserAsync(data.cartURL);
      } else {
        // an error or timeout occured
        // callback called if timeout occur
        const dialogRetryGetURL = async (status: number) => {
          if (BookService.REQUEST_TIMEOUT === status) {
            await get(genreURL, true);
          }
        };
        // prepare dialog
        let dialog: IDialogProps = {title: 'Oops!', description: message};
        if (status === BookService.REQUEST_TIMEOUT) {
          dialog = {
            ...dialog,
            title: 'Time out',
            secondaryActionText: 'RETRY',
            secondaryCallback: dialogRetryGetURL,
            extra: status,
          };
        }
        // show dialog
        navigate<IDialogProps>('Dialog', dialog);
      }
      // return data null type
      return {data, message};
    } catch (error) {
      console.error(error);
      return {data: null, message: wrapError(error).message};
    }
  };
  return get;
};
