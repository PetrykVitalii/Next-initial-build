import { createActionCreators } from 'immer-reducer';

import { FaqsReducer } from '@/store/reducers/faqs';
import { AsyncAction } from '@/store/actions/common';
import { RequestOptions, RequestState } from '@/store/reducers/common';

export const faqsActions = createActionCreators(FaqsReducer);

export type FaqsActions =
  | ReturnType<typeof faqsActions.setFaqsState>
  | ReturnType<typeof faqsActions.setFaqs>;

export const getFaqs = (
  search: string = '',
  options?: RequestOptions,
): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    if (options?.silent) {
      dispatch(faqsActions.setFaqsState(RequestState.LOADING));
    }

    const faqs = await mainApi.getFaqs(search);
    dispatch(faqsActions.setFaqs(faqs));

    dispatch(faqsActions.setFaqsState(RequestState.LOADED));
  } catch {
    dispatch(faqsActions.setFaqsState(RequestState.ERROR));
  }
};
