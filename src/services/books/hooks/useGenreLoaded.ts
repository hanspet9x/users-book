import {useState} from 'react';
import {useEffect} from 'react';
import {IDialogProps} from '../../../containers/dialog/dialog.types';
import {navigate} from '../../../navigations/navigations';
import {splitArray, wrapError} from '../../../utils/utils';
import {IGenreResponse} from '../interface/GenreResponse.types';
import BookService from './../BookService';

type Props = {
  loading: boolean;
  data: IGenreResponse[][] | null;
  message: string,
}
export const useRetrieveGenre = () => {
  const [response, setResponse] = useState<Props>({
    loading: true, data: [], message: '',
  });

  const onRefresh = async () => {
    setResponse({...response, loading: true});
    try {
      const {data, message} = await BookService.getGenres();
      console.log(data, message);
      let splittedData = null;
      if (data) {
        splittedData = splitArray(data, 2);
      }
      setResponse({loading: false, data: splittedData, message});
    } catch (error) {
      setResponse({loading: false, data: null,
        message: wrapError(error).message});
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await onRefresh();
      } catch (error) {
        navigate('Dialog',
        {
          title: 'Error',
          description: wrapError(error).message,
        } as IDialogProps);
      }
    })();
  }, []);
  return [response, onRefresh] as [Props, ()=>void];
};
