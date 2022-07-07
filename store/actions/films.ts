import { createActionCreators } from 'immer-reducer';

import { FilmsReducer } from '@/store/reducers/films';
import { AsyncAction } from '@/store/actions/common';
import { RequestState } from '@/store/reducers/common';

export const filmsActions = createActionCreators(FilmsReducer);

export type FilmsActions =
  | ReturnType<typeof filmsActions.setFilms>
  | ReturnType<typeof filmsActions.setFilmsState>;

export const getFilms = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(filmsActions.setFilmsState(RequestState.LOADING));

    const films = await mainApi.getFilms();
    dispatch(filmsActions.setFilms(films));

    dispatch(filmsActions.setFilmsState(RequestState.LOADED));
  } catch {
    dispatch(filmsActions.setFilmsState(RequestState.ERROR));
  }
};
