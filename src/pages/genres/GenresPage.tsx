import React from 'react';
import BookGenres from '../../containers/genres/BookGenres';
import BookGenresDummy from '../../containers/genres/BookGenresDummy';
import {navigate} from '../../navigations/navigations';
import {RootScreenStackProps} from '../../navigations/stacks';
import {useRetrieveGenre} from '../../services/books/hooks/useGenreLoaded';

type Props = RootScreenStackProps<'Genre'>;
export default function GenresPage(props: Props) {
  const [info, setRefresh] = useRetrieveGenre();
  if (!info.loading) {
    if (info.data) {
      return (
        <BookGenres data={info.data} />
      );
    } else {
      navigate('Dialog', {title: 'Error', description: info.message});
    }
  }
  return (<BookGenresDummy onRefresh={setRefresh} animate={info.loading} />);
}

// const styles = StyleSheet.create({});
