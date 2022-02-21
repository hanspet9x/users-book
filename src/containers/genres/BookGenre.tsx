import {Image, ImageSourcePropType, StyleSheet, Text} from 'react-native';
import React from 'react';
import {fontFamily, images} from '../../assets/assets';
import {TouchableRipple, useTheme} from 'react-native-paper';

interface Props {
  source: ImageSourcePropType;
  name: string;
  url: string;
  onPress(): void;
}
const BookGenre = (props: Props) => {
  const {colors, roundness} = useTheme();

  return (
    <TouchableRipple rippleColor={colors.backdrop}
      onPress={props.onPress}>
      <Image borderRadius={roundness} source={props.source}
        loadingIndicatorSource={images.imageThumbnail} />
      <Text style={styles.genreName}>{props.name}</Text>
    </TouchableRipple>
  );
};

export default BookGenre;

const styles = StyleSheet.create({
  genreName: {
    fontFamily: fontFamily.regular,
  },
});
