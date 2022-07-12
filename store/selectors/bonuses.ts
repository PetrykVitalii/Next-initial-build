import { createSelector, Selector } from 'reselect';

import { State } from '@/store';
import { RequestState } from '@/store/reducers/common';

import { IBonus } from '@/interfaces/bonus';

const selectBonuses = (state: State) => state.bonusesReducer;

export const selectBonusesState: Selector<State, RequestState> = createSelector(
  selectBonuses,
  ({ bonusesState }) => bonusesState,
);

export const selectAllBonuses: Selector<State, IBonus[]> = createSelector(
  selectBonuses,
  ({ bonuses }) => bonuses,
);
