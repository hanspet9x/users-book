import {wrapError} from '../../../utils/utils';
import BookService from '../BookService';

export const useGetCartUrl = () => {
  const get = async (genreURL: string) => {
    try {
      const {data, message} = await BookService.getBookCheckoutLink(genreURL);
      // return data null type
      return {data, message};
    } catch (error) {
      return {data: null, message: wrapError(error).message};
    }
  };
  return get;
};
