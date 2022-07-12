import { createSelector, Selector } from 'reselect';

import { State } from '@/store';
import { RequestState } from '@/store/reducers/common';

import { ISlotGame } from '@/interfaces/slotGame';

const selectSlotGames = (state: State) => state.slotGamesReducer;

export const selectSlotGamesState: Selector<State, RequestState> = createSelector(
  selectSlotGames,
  ({ slotGamesState }) => slotGamesState,
);

export const selectAllSlotGames: Selector<State, ISlotGame[]> = createSelector(
  selectSlotGames,
  ({ slotGames }) => slotGames,
);
