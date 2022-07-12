import { createSelector, Selector } from 'reselect';

import { State } from '@/store';
import { RequestState } from '@/store/reducers/common';

const selectFaqs = (state: State) => state.faqsReducer;

export const selectFaqsState: Selector<State, RequestState> = createSelector(
  selectFaqs,
  ({ faqsState }) => faqsState,
);
