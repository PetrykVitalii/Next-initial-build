import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';

import { ICasino } from '@/interfaces/casino';

interface CasinosState {
  casinosState: RequestState,
  casinos: ICasino[];
}

const initialState: CasinosState = {
  casinosState: RequestState.IDLE,
  casinos: [],
};

export class CasinosReducer extends ImmerReducer<CasinosState> {
  setCasinosState(casinosState: RequestState) {
    this.draftState.casinosState = casinosState;
  }

  setCasinos(casinos: ICasino[]) {
    this.draftState.casinos = casinos;
  }
}

export default createReducerFunction(CasinosReducer, initialState);
