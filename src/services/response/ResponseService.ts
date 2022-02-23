import BookService from '../books/BookService';

export const ResponseService = {
  getBookMessageFromStatus(status: number) {
    switch (status) {
      case BookService.NOT_FOUND:
        return 'Requested book not found! Kindly try another.!';
      case BookService.REQUEST_TIMEOUT:
        return `It seems data retrieval time is longer
         than expected, continue?`;
      case BookService.UNPROCESSABLE:
        return 'This request cannot be processed at this time. ';
      default:
        return '';
    }
  },
};
