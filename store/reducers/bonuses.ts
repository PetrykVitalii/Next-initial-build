import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';

import { IBonus } from '@/interfaces/bonus';

interface BonusesState {
  bonusesState: RequestState,
  bonuses: IBonus[],
}

const initialState: BonusesState = {
  bonusesState: RequestState.IDLE,
  bonuses: [],
};

export class BonusesReducer extends ImmerReducer<BonusesState> {
  setBonusesState(bonusesState: RequestState) {
    this.draftState.bonusesState = bonusesState;
  }

  setBonuses(bonuses: IBonus[]) {
    this.draftState.bonuses = bonuses;
  }
}

export default createReducerFunction(BonusesReducer, initialState);
