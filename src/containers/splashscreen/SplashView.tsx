import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../assets/assets';

const SplashView = () => {
  return (
    <View>
      <Image source={images.splashScreen} />
    </View>
  );
};

export default SplashView;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#fff',
  },
});
