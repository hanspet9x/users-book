import {APIService} from '../api/APIService';
import {IGenreResponse} from './interface/GenreResponse.types';
import {bookURL} from './routes/route';
import StorageService from '../storage/StorageService';
import {LogService} from '../log/LogService';
import {ResponseService} from '../response/ResponseService';
class BookService {
  static GENRE_STORAGE_KEY = 'book-genre';
  static CART_URL_STORAGE_KEY = 'book-cart-url';
  static GENRE_BATCH_SIZE = 10;

  static NOT_FOUND = 404;
  static REQUEST_TIMEOUT = 408;
  static UNPROCESSABLE = 422;

  static async getGenres() {
    try {
      const response = await APIService.get<IGenreResponse[]>({
        url: bookURL.getGenres, cache: true});
      const message = ResponseService.getBookMessageFromStatus(response.status);
      if (response.error) {
        return {
          data: null,
          message,
        };
      }
      await BookService.saveGenre(response.data);
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
      const response = await APIService.get<string>({
        url: retryCheckout? bookURL.retryBookCheckoutURL(genreURL) :
        bookURL.getBookCheckoutURL(genreURL),
        cache: true,
      });
      const message = ResponseService.getBookMessageFromStatus(response.status);
      if (response.error) {
        return {
          data: null,
          message,
          status: response.status,
        };
      }
      return {data: response.data, message, status: response.status};
    } catch (error) {
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
};

export default BookService;
