import {IGenreResponse} from '../interface/GenreResponse.types';

export class GenreDTO {
  imgUrl: string;
  name: string;
  link: string;

  constructor(response: IGenreResponse) {
    this.imgUrl = response.imgURL;
    this.name = response.name || '';
    this.link = response.link || '';
  }
}
