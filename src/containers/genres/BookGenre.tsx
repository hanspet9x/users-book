import {Image, ImageSourcePropType, StyleSheet, Text} from 'react-native';
import React from 'react';
import {images} from '../../assets/assets';
import {TouchableRipple, useTheme} from 'react-native-paper';

interface Props {
  source: ImageSourcePropType;
  name: string;
  url: string;
  onGenreSelected(): void;
}
const BookGenre = (props: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableRipple rippleColor={colors.backdrop}
      onPress={props.onGenreSelected}>
      <Image source={props.source}
        loadingIndicatorSource={images.imageThumbnail} />
      <Text>{props.name}</Text>
    </TouchableRipple>
  );
};

export default BookGenre;

const styles = StyleSheet.create({});
