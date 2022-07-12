import { createActionCreators } from 'immer-reducer';

import { CasinosReducer } from '@/store/reducers/casinos';
import { AsyncAction } from '@/store/actions/common';
import { RequestState } from '@/store/reducers/common';

export const casinosActions = createActionCreators(CasinosReducer);

export type CasinosActions =
  | ReturnType<typeof casinosActions.setCasinos>
  | ReturnType<typeof casinosActions.setCasinosState>;

export const getCasinos = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(casinosActions.setCasinosState(RequestState.LOADING));

    const casinos = await mainApi.getCasinos();
    dispatch(casinosActions.setCasinos(casinos));

    dispatch(casinosActions.setCasinosState(RequestState.LOADED));
  } catch {
    dispatch(casinosActions.setCasinosState(RequestState.ERROR));
  }
};
