import {FlatList} from 'react-native';
import React from 'react';
import {IGenreResponse} from
  '../../services/books/interface/GenreResponse.types';
import Row from '../rows/Row';
import BookGenre from '../../components/genre/BookGenre';
import {useGenreBatching} from '../../services/books/hooks/useGenreBatching';
import {useGetCheckoutURL} from '../../services/books/hooks/useGetCheckoutURL';
import {useEffect} from 'react';
import {useState} from 'react';

type Props = {
    data: IGenreResponse[][],
}
const BookGenres = (props: Props) => {
  const [genres, setGenres] = useState(props.data);
  const {batchInfo, getUpdates} = useGenreBatching();
  const get = useGetCheckoutURL();

  const onGetCartUrl = async (genreURL: string) => {
    await get(genreURL);
  };

  useEffect(() => {
    if (batchInfo.batch) {
      const data = [...genres, ...batchInfo.batch];
      setGenres(data);
    }
  }, [batchInfo.loading, batchInfo.batch]);
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
    <FlatList data={genres}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item, i) => `list${i}`}
      refreshing={batchInfo.loading}
      onEndReached={getUpdates}
      extraData={[batchInfo.batch, genres]}
    />
  );
};

export default BookGenres;

// const styles = StyleSheet.create({});

