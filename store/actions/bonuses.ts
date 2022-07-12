import { createActionCreators } from 'immer-reducer';

import { BonusesReducer } from '@/store/reducers/bonuses';
import { AsyncAction } from '@/store/actions/common';
import { RequestState } from '@/store/reducers/common';

export const bonusesActions = createActionCreators(BonusesReducer);

export type BonusesActions =
  | ReturnType<typeof bonusesActions.setBonuses>
  | ReturnType<typeof bonusesActions.setBonusesState>;

export const getBonuses = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(bonusesActions.setBonusesState(RequestState.LOADING));

    const bonuses = await mainApi.getBonuses();
    dispatch(bonusesActions.setBonuses(bonuses));

    dispatch(bonusesActions.setBonusesState(RequestState.LOADED));
  } catch {
    dispatch(bonusesActions.setBonusesState(RequestState.ERROR));
  }
};
