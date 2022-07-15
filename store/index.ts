/* eslint-disable import/no-cycle */
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { LanguageActions } from '@/store/actions/language';
import { FaqsActions } from '@/store/actions/faqs';
import { BonusesActions } from '@/store/actions/bonuses';
import { CasinosActions } from '@/store/actions/casinos';
import { SlotGamesActions } from '@/store/actions/slotGames';

import languageReducer from '@/store/reducers/language';
import faqsReducer from '@/store/reducers/faqs';
import bonusesReducer from '@/store/reducers/bonuses';
import casinosReducer from '@/store/reducers/casinos';
import slotGamesReducer from '@/store/reducers/slotGames';

import MainApi from '@/api/main';
import MainProtected from '@/api/main-protected';
import S3Api from '@/api/s3';

const rootReducer = combineReducers({
  languageReducer,
  faqsReducer,
  bonusesReducer,
  casinosReducer,
  slotGamesReducer,
});

const composeEnhancers = (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const mainApi = new MainApi();
const mainProtectedApi = new MainProtected();
const s3Api = new S3Api();

export const getApiArguments = () => ({
  mainApi,
  mainProtectedApi,
  s3Api,
});

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument(getApiArguments()),
  ),
);

export type State = ReturnType<typeof rootReducer>;
export type Actions =
  | FaqsActions
  | BonusesActions
  | CasinosActions
  | SlotGamesActions
  | LanguageActions;

export const store = createStore(rootReducer, enhancer);

export default store;

export const getStore = () => store;
