import { createSelector, Selector } from 'reselect';

import { State } from '@/store';
import { RequestState } from '@/store/reducers/common';

import { ICasino } from '@/interfaces/casino';

const selectCasinos = (state: State) => state.casinosReducer;

export const selectCasinosState: Selector<State, RequestState> = createSelector(
  selectCasinos,
  ({ casinosState }) => casinosState,
);

export const selectaAllCasinos: Selector<State, ICasino[]> = createSelector(
  selectCasinos,
  ({ casinos }) => casinos,
);
