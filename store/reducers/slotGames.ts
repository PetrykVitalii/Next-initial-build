import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';
import { ISlotGame } from '@/interfaces/slotGame';

interface SlotGamesState {
  slotGamesState: RequestState,
  slotGames: ISlotGame[],
}

const initialState: SlotGamesState = {
  slotGamesState: RequestState.IDLE,
  slotGames: [],
};

export class SlotGamesReducer extends ImmerReducer<SlotGamesState> {
  setSlotGamesState(slotGamesState: RequestState) {
    this.draftState.slotGamesState = slotGamesState;
  }

  setSlotGames(slotGames: ISlotGame[]) {
    this.draftState.slotGames = slotGames;
  }
}

export default createReducerFunction(SlotGamesReducer, initialState);
