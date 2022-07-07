import { createSelector, Selector } from 'reselect';

import { State } from '@/store';
import { RequestState } from '@/store/reducers/common';
import { IFilm } from '@/store/reducers/films';

const selectFilms = (state: State) => state.filmsReducer;

export const selectAllFilms: Selector<State, IFilm[]> = createSelector(
  selectFilms,
  ({ films }) => films,
);

export const selectFilmsState: Selector<State, RequestState> = createSelector(
  selectFilms,
  ({ filmsState }) => filmsState,
);
