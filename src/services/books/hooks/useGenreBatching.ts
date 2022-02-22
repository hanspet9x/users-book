import {useEffect, useState} from 'react';
import {IGenreResponse} from './../interface/GenreResponse.types';
import BookService from './../BookService';
import {useRef} from 'react';

type Props = {
  batch: IGenreResponse[] | null;
  loading: boolean;
  done: boolean;
}
export const useGenreBatching = () => {
  const ref = useRef(0);
  const genresRef = useRef<IGenreResponse[] | null>(null);

  const [batchInfo, setBatch] = useState<Props>(
      {
        loading: false, done: false, batch: null,
      });
  // fetch genre and store in ref.
  useEffect(() => {
    ref.current = 0;
    (async () => {
      const genres = await BookService.getStoredGenres();
      genresRef.current = genres;
      ref.current = BookService.GENRE_BATCH_SIZE;
    });
  }, []);
  // call repeatedly to batch;
  const getUpdates = () => {
    if (batchInfo.done) return;
    setBatch({...batchInfo, loading: true});
    if (genresRef.current) {
      const temp = ref.current;
      ref.current += BookService.GENRE_BATCH_SIZE;
      const batch = genresRef.current.slice(temp, ref.current);
      setBatch({
        batch,
        done: batch.length === genresRef.current.length,
        loading: false,
      });
    }
  };
  return {batchInfo, getUpdates};
};
