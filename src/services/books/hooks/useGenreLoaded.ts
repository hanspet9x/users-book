import {useState} from 'react';
import {useEffect} from 'react';
import {IDialogProps} from '../../../containers/dialog/dialog.types';
import {navigate} from '../../../navigations/navigations';
import {wrapError} from '../../../utils/utils';
import BookService from './../BookService';

export const useRetrieveGenre = () => {
  const [response, setResponse] = useState({error: false, status: 0});

  useEffect(() => {
    (async () => {
      try {
        const {error, status} = await BookService.getGenres();
        setResponse({error, status});
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
