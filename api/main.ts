/* eslint-disable class-methods-use-this */
import HttpClient from '@/api/http-client';

import { IFilm } from '@/store/reducers/films';

export default class MainApi extends HttpClient {
  public constructor() {
    super(process.env.API_URL);
  }

  public getFilms(): Promise<IFilm[]> {
    return this.instance.get('/films');
  }
}
