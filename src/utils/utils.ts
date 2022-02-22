import {Image} from 'react-native';
import * as Font from 'expo-font';
import {FontSource} from 'expo-font';

export const prefetchImages = async (uris: string[]): Promise<boolean[]> => {
  return await Promise.all(uris.map((uri) => Image.prefetch(uri)));
};

export const prefetchImagesEx = async <T>(
  data: Record<keyof T, any>[],
  imgKey: keyof T):Promise<boolean[]> => {
  return await Promise.all(data.map((obj) => Image.prefetch(obj[imgKey])));
};

export const loadArrayFonts = async (fonts: Record<string, FontSource>[]) => {
  return await Promise.all(fonts.map((font) => Font.loadAsync(font)));
};

export const loadObjFonts = async (fonts: Record<string, FontSource>) => {
  return await Promise.all(
      Object.entries(fonts).map(
          ([fontName, fontSource]) =>
            Font.loadAsync({[fontName]: fontSource})));
};

export const wrapError = (e: any) => {
  return e as Error;
};

export const splitArray = (array: any[], count: number) => {
  const nArray:any[] = [];
  let temp:any[] = [];
  for (let i = 1; i <= array.length; i++) {
    temp.push(array[i-1]);
    if (i % count === 0) {
      nArray.push(temp);
      temp = [];
    }
  }
  if (temp.length > 0) nArray.push(temp);
  return nArray;
};

export const createArray = (size: number) => {
  return Array.from({length: size});
};


