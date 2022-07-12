import { createActionCreators } from 'immer-reducer';

import { FaqsReducer } from '@/store/reducers/faqs';
import { AsyncAction } from '@/store/actions/common';
import { RequestState } from '@/store/reducers/common';

export const faqsActions = createActionCreators(FaqsReducer);

export type FaqsActions =
  | ReturnType<typeof faqsActions.setFaqsState>
  | ReturnType<typeof faqsActions.setFaqs>;

export const getFaqs = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(faqsActions.setFaqsState(RequestState.LOADING));

    const faqs = await mainApi.getFaqs();
    dispatch(faqsActions.setFaqs(faqs));

    dispatch(faqsActions.setFaqsState(RequestState.LOADED));
  } catch {
    dispatch(faqsActions.setFaqsState(RequestState.ERROR));
  }
};
