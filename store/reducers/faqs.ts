import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { RequestState } from '@/store/reducers/common';

import { IFaq } from '@/interfaces/faq';

interface FaqsState {
  faqsState: RequestState,
  faqs: IFaq[],
}

const initialState: FaqsState = {
  faqsState: RequestState.IDLE,
  faqs: [],
};

export class FaqsReducer extends ImmerReducer<FaqsState> {
  setFaqsState(faqsState: RequestState) {
    this.draftState.faqsState = faqsState;
  }

  setFaqs(faqs: IFaq[]) {
    this.draftState.faqs = faqs;
  }
}

export default createReducerFunction(FaqsReducer, initialState);
