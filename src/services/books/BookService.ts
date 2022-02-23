import {APIService} from '../api/APIService';
import {IGenreResponse} from './interface/GenreResponse.types';
import {bookURL} from './routes/route';
import StorageService from '../storage/StorageService';
import {LogService} from '../log/LogService';
import {ICheckoutResponse} from './interface/CheckoutResponse.types';
import {AppStrings} from './../../common/string';
class BookService {
  static GENRE_STORAGE_KEY = 'book-genre';
  static CART_URL_STORAGE_KEY = 'book-cart-url';
  static GENRE_BATCH_SIZE = 10;

  static NOT_FOUND = 404;
  static REQUEST_TIMEOUT = 408;
  static UNPROCESSABLE = 422;

  static async getGenres() {
    try {
      /* const storeData = await BookService
          .getStoredGenres();
      if (storeData) {
        return {data: storeData, message: ''};
      } */
      const response = await APIService.get<IGenreResponse[]>({
        url: bookURL.getGenres});
      const message = BookService.getBookMessageFromStatus(response.status);
      if (response.error) {
        return {
          data: null,
          message,
        };
      }
      BookService.saveGenre(response.data);
      return {data: response.data, message};
    } catch (error) {
      throw error;
    }
  }

  static async getStoredGenres() {
    const items = await StorageService.getStorage()
        .getItem(BookService.GENRE_STORAGE_KEY);
    if (items) {
      return JSON.parse(items) as IGenreResponse[];
    }
    return null;
  }

  static async getBookCheckoutLink(genreURL: string, retryCheckout?: boolean) {
    try {
      const response = await APIService.get<ICheckoutResponse>({
        url: retryCheckout? bookURL.retryBookCheckoutURL(genreURL) :
        bookURL.getBookCheckoutURL(genreURL),
      });
      const message = BookService.getBookMessageFromStatus(response.status);
      if (response.error) {
        return {
          data: null,
          message,
          status: response.status,
        };
      }
      return {data: response.data, message, status: response.status};
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  }

  static async saveGenre(data: IGenreResponse[]) {
    try {
      // save raw
      StorageService.getStorage()
          .setItem(BookService.GENRE_STORAGE_KEY, JSON.stringify(data));
      // save image
      // await prefetchImagesEx<IGenreResponse>(data, 'imgURL');
    } catch (error) {
      LogService.error(error);
      // TODO: Add global hook for errors
    }
  }

  static getBookMessageFromStatus(status: number) {
    switch (status) {
      case BookService.NOT_FOUND:
        return AppStrings.errors.notFound;
      case BookService.REQUEST_TIMEOUT:
        return AppStrings.errors.timeOut;
      case BookService.UNPROCESSABLE:
        return AppStrings.errors.unproccessed;
      case APIService.BAD_REQUEST:
        return AppStrings.errors.badRequest;
      default:
        return AppStrings.errors.general;
    }
  }
};

export default BookService;
