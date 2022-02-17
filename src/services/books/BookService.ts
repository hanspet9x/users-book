import { APIService } from "../api/APIService";
import { IBookGenre } from "./interface/BookGenres.types";
import { bookURL } from "./routes/route";

const BookService = {
  async getGenres() {
    try {
      const response = await APIService.get<IBookGenre[]>({
        url: bookURL.getGenres,
      });
      if (!response.error) {
        return response.data;
      }
      throw new Error('Something went wrong.');
    } catch (error) {
      throw error;
    }
  },

  async getBookCheckoutLink(genres: string) {
    try {
      const response = await APIService.get<string>({
        url: bookURL.getBookCheckoutURL(genres),
      });
      if (!response.error) {
        return response.data;
      }
      throw new Error('something is wrong.')
    } catch (error) {
      throw error;
    }
  },
};

export default BookService;
