import {APIService} from '../api/APIService';
import {IGenreResponse} from './interface/GenreResponse.types';
import {bookURL} from './routes/route';
import StorageService from '../storage/StorageService';
import {prefetchImagesEx} from '../../utils/utils';
import {LogService} from '../log/LogService';
class BookService {
  static GENRE_STORAGE_KEY = 'book-genre';

  async getGenres() {
    try {
      const response = await APIService.get<IGenreResponse[]>({
        url: bookURL.getGenres,
      });
      if (!response.error) {
        return response.data;
      }
      throw new Error('Something went wrong.');
    } catch (error) {
      throw error;
    }
  }

  async getStoredGenres() {
    return await StorageService.getStorage()
        .getItem(BookService.GENRE_STORAGE_KEY);
  }

  async getBookCheckoutLink(genres: string) {
    try {
      const response = await APIService.get<string>({
        url: bookURL.getBookCheckoutURL(genres),
      });
      if (!response.error) {
        return response.data;
      }
      throw new Error('something is wrong.');
    } catch (error) {
      throw error;
    }
  }

  async saveGenre(data: IGenreResponse[]) {
    try {
      // save raw
      StorageService.getStorage()
          .setItem(BookService.GENRE_STORAGE_KEY, JSON.stringify(data));
      // save image
      await prefetchImagesEx<IGenreResponse>(data, 'imgURL');
    } catch (error) {
      LogService.error(error);
      // TODO: Add global hook for errors.
    }
  }
};

export default BookService;
