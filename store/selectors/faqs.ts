import { createSelector, Selector } from 'reselect';

import { State } from '@/store';
import { RequestState } from '@/store/reducers/common';

import { IFaq } from '@/interfaces/faq';

const selectFaqs = (state: State) => state.faqsReducer;

export const selectFaqsState: Selector<State, RequestState> = createSelector(
  selectFaqs,
  ({ faqsState }) => faqsState,
);

export const selectAllFaqs: Selector<State, IFaq[]> = createSelector(
  selectFaqs,
  ({ faqs }) => faqs,
);
