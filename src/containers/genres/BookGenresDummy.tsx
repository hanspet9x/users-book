import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {images} from '../../assets/assets';
import Row from '../rows/Row';
import {createArray} from '../../utils/utils';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {useRef} from 'react';

type Props = {
  animate: boolean;
  onRefresh():void;
}
const BookGenresDummy = (props: Props) => {
  const hasRefreshedRef = useRef(false);
  const data = createArray(20);
  const onRenderItem = () => {
    return (
      <Row style={styles.row}>
        {createArray(2).map((n, i) => (
          <View style={styles.view} key={`dum${i}`}>
            <Image style={styles.image}
              resizeMode='cover'
              source={images.imageThumbnail} />
            <ActivityIndicator
              style={styles.indicator}
              color={Colors.brown500}
              animating={props.animate} />
          </View>
        ))}
      </Row>
    );
  };

  const onRefreshing = () => {
    hasRefreshedRef.current = true;
    props.onRefresh();
  };

  return (
    <FlatList
      data={data}
      refreshing={ hasRefreshedRef.current && props.animate}
      onRefresh={onRefreshing}
      renderItem={onRenderItem}
      keyExtractor={(item, i) => `dummy${i}`} />
  );
};

export default BookGenresDummy;

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '49%',
    height: 100,
  },
  row: {
    marginVertical: 4,
  },
  image: {
    width: '100%',
    height: 100,
  },
  indicator: {
    position: 'absolute',
  },
});
