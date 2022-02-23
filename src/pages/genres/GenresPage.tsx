import React from 'react';
import {useEffect} from 'react';
import BookGenres from '../../containers/genres/BookGenres';
import BookGenresDummy from '../../containers/genres/BookGenresDummy';
import {navigate} from '../../navigations/navigations';
import {RootScreenStackProps} from '../../navigations/stacks';
import {useRetrieveGenre} from '../../services/books/hooks/useGenreLoaded';

type Props = RootScreenStackProps<'Genre'>;
export default function GenresPage(props: Props) {
  const {info, get} = useRetrieveGenre();

  useEffect(() => {
    (async () => {
      await get();
    })();
  }, []);

  useEffect(() => {
    if (!info.loading) {
      if (!info.data) {
        navigate('Dialog', {title: 'Error', description: info.message});
      }
    }
  }, [info.loading]);

  if (!info.loading) {
    if (info.data) {
      return (
        <BookGenres data={info.data} />
      );
    }
  }
  return (<BookGenresDummy onRefresh={get} animate={info.loading} />);
}

// const styles = StyleSheet.create({});
