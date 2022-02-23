import {useState} from 'react';
import {AppConfig} from '../../../config/app.config';
import {splitArray, wrapError} from '../../../utils/utils';
import {IGenreResponse} from '../interface/GenreResponse.types';
import BookService from './../BookService';

type Props = {
  loading: boolean;
  data: IGenreResponse[][] | null;
  message: string,
}
export const useRetrieveGenre = () => {
  const [info, setInfo] = useState<Props>({
    loading: true, data: [], message: '',
  });

  const get = async () => {
    setInfo({...info, loading: true});
    try {
      const {data, message} = await BookService.getGenres();
      let splittedData = null;
      if (data) {
        splittedData = splitArray(
            data.slice(0, BookService.GENRE_BATCH_SIZE),
            AppConfig.GENRE_COLUMN_SIZE);
      }
      setInfo({loading: false, data: splittedData, message});
    } catch (error) {
      setInfo({loading: false, data: null,
        message: wrapError(error).message});
    }
  };
  return {info, get};
};
