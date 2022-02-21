import {DefaultTheme} from 'react-native-paper';
import {fontFamily} from '../assets/assets';
export const appTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(0,0,0,0.2)',
    text: '#666',
  },
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      fontFamily: fontFamily.semiBold,
    },
    regular: {
      fontFamily: fontFamily.medium,
    },
    light: {
      fontFamily: fontFamily.regular,
    },
  },
  animation: {
    scale: 1,
  },
};
