import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';

export interface IFilm {
  description: string,
  director: string,
  id: string,
  image: string,
  locations: string[],
  movie_banner: string,
  original_title: string,
  original_title_romanised: string,
  people: string[],
  producer: string,
  release_date: string,
  rt_score: string,
  running_time: string,
  species: string[],
  title: string,
  url: string,
}

interface FilmsState {
  films: IFilm[];
  filmsState: RequestState,
}

const initialState: FilmsState = {
  films: [],
  filmsState: RequestState.IDLE,
};

export class FilmsReducer extends ImmerReducer<FilmsState> {
  setFilms(films: IFilm[]) {
    this.draftState.films = films;
  }

  setFilmsState(filmsState: RequestState) {
    this.draftState.filmsState = filmsState;
  }
}

export default createReducerFunction(FilmsReducer, initialState);
