import {getExtra} from '.';

export const AppConfig = {
  HOST: getExtra('host'),
  BASE_PATH: getExtra('basePath'),
  GENRE_COLUMN_SIZE: 2,
};
