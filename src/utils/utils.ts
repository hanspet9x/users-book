import {Image} from 'react-native';

export const prefetchImages = async (uris: string[]): Promise<boolean[]> => {
  return await Promise.all(uris.map((uri) => Image.prefetch(uri)));
};

export const prefetchImagesEx = async <T>(
  data: Record<keyof T, any>[],
  imgKey: keyof T):Promise<boolean[]> => {
  return await Promise.all(data.map((obj) => Image.prefetch(obj[imgKey])));
};
