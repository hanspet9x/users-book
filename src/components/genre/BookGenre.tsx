import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamily, images} from '../../assets/assets';
import {TouchableRipple, useTheme} from 'react-native-paper';

interface Props {
  imgUrl: string;
  name: string;
  url: string;
  onPress(url: string): void;
}
const BookGenre = (props: Props) => {
  const {colors, roundness} = useTheme();

  return (
    <TouchableRipple style={styles.container} rippleColor={colors.backdrop}
      onPress={() => props.onPress(props.url)}>
      <View style={styles.view}>
        <Image borderRadius={roundness}
          style={styles.image}
          resizeMode='cover'
          source={{uri: props.imgUrl}}
          loadingIndicatorSource={images.imageThumbnail} />
        <Text style={styles.genreName}>{props.name}</Text>
      </View>
    </TouchableRipple>
  );
};

export default BookGenre;

const styles = StyleSheet.create({
  genreName: {
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    marginVertical: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  view: {
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    width: '49%',
  },
});
