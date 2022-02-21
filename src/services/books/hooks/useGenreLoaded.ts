import {useState} from 'react';
import {useEffect} from 'react';
import {IDialogProps} from '../../../containers/dialog/dialog.types';
import {navigate} from '../../../navigations/navigations';
import {wrapError} from '../../../utils/utils';
import {IGenreResponse} from '../interface/GenreResponse.types';
import BookService from './../BookService';

type Props = {
  error: boolean;
  status: number;
  loaded: boolean;
  data: IGenreResponse[] | null;
}
export const useRetrieveGenre = () => {
  const [response, setResponse] = useState<Props>({
    error: false, status: 0, loaded: false,
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const storedData = await BookService.getStoredGenres();
        if (storedData) {
          // setResponse()
        }
        const {error, status, data} = await BookService.getGenres();
        setResponse({error, status, loaded: true, data});
      } catch (error) {
        navigate('Dialog',
        {
          title: 'Error',
          description: wrapError(error).message,
        } as IDialogProps);
      }
    })();
  });
  return response;
};
