import {FlatList} from 'react-native';
import React from 'react';
import {IGenreResponse} from
  '../../services/books/interface/GenreResponse.types';
import Row from '../rows/Row';
import BookGenre from '../../components/genre/BookGenre';
import {useGenreBatching} from '../../services/books/hooks/useGenreBatching';
import {AppStrings} from '../../common/string';
import {useAppLoading} from '../../hooks/useAppLoading';
import {useGetCartUrl} from '../../services/books/hooks/useGetCartURL';
import {navigate} from '../../navigations/navigations';
import {ICartProp} from '../../pages/cart/cart.types';
import {IDialogProps} from '../dialog/dialog.types';

type Props = {
    data: IGenreResponse[][],
}
const BookGenres = (props: Props) => {
  const {batchInfo, getUpdates} = useGenreBatching();
  const get = useGetCartUrl();
  const {onShow, onHide} = useAppLoading();

  const onGetCartUrl = async (genreURL: string) => {
    onShow(AppStrings.genre.getCartURL);
    const info = await get(genreURL);
    onHide();
    if (info.data) {
      // navigate to cartURL
      navigate<ICartProp>('Cart', {genreURL});
    } else {
      navigate<IDialogProps>('Dialog',
          {title: 'Error', description: info.message});
    }
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

