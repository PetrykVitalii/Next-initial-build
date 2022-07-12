import { createActionCreators } from 'immer-reducer';

import { SlotGamesReducer } from '@/store/reducers/slotGames';
import { AsyncAction } from '@/store/actions/common';
import { RequestState } from '@/store/reducers/common';

export const slotGamesActions = createActionCreators(SlotGamesReducer);

export type SlotGamesActions =
  | ReturnType<typeof slotGamesActions.setSlotGames>
  | ReturnType<typeof slotGamesActions.setSlotGamesState>;

export const getSlotGames = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(slotGamesActions.setSlotGamesState(RequestState.LOADING));

    const slotGames = await mainApi.getSlotGames();
    dispatch(slotGamesActions.setSlotGames(slotGames));

    dispatch(slotGamesActions.setSlotGamesState(RequestState.LOADED));
  } catch {
    dispatch(slotGamesActions.setSlotGamesState(RequestState.ERROR));
  }
};
