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

export const loadFonts = async (fonts: Record<string, FontSource>[]) => {
  return await Promise.all(fonts.map((font) => Font.loadAsync(font)));
};

export const wrapError = (e: any) => {
  return e as Error;
};

