import React from 'react';
import {RootScreenStackProps} from '../../navigations/stacks';
import {WebView} from 'react-native-webview';
type Props = RootScreenStackProps<'Cart'>;

const BookCart = (props: Props) => {
  return (
    <WebView source={{uri: props.route.params.genreURL}} />
  );
};

export default BookCart;

// const styles = StyleSheet.create({});
