import {FlatList} from 'react-native';
import React from 'react';
import {IGenreResponse} from
  '../../services/books/interface/GenreResponse.types';
import Row from '../rows/Row';
import BookGenre from '../../components/genre/BookGenre';
import {useGenreBatching} from '../../services/books/hooks/useGenreBatching';

type Props = {
    data: IGenreResponse[][],
}
const BookGenres = (props: Props) => {
  const {batchInfo, getUpdates} = useGenreBatching();

  const onGetCartUrl = () => {

  };
  const renderItem = (genres: IGenreResponse[]) => {
    return (
      <Row>
        {
          genres.map((genre, i) => (
            <BookGenre
              key={`genre${i}`}
              name={genre.name}
              url={genre.link}
              onPress={onGetCartUrl}
              imgUrl={genre.imgURL} />
          ))
        }
      </Row>
    );
  };
  return (
    <FlatList data={props.data}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item, i) => `list${i}`}
      refreshing={batchInfo.loading}
      onEndReached={getUpdates}
      extraData={batchInfo.batch}
    />
  );
};

export default BookGenres;

// const styles = StyleSheet.create({});

