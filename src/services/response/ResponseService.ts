import {APIService} from '../api/APIService';

export const ResponseService = {
  getMessageFromStatus(status: number) {
    switch (status) {
      case APIService.NOT_FOUND:
        return 'Requested data not found! Kindly try another.!';
      case APIService.REQUEST_TIMEOUT:
        return `It seems data retrieval time is longer
         than expected, continue?`;
      case APIService.UNPROCESSABLE:
        return 'This request cannot be processed at theis time. ';
      default:
        return '';
    }
  },
};
