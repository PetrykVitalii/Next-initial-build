import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { LanguageActions } from '@/store/actions/language';
import { FilmsActions } from '@/store/actions/films';

import languageReducer from '@/store/reducers/language';
import filmsReducer from '@/store/reducers/films';

import MainApi from '@/api/main';
import MainProtected from '@/api/main-protected';
import S3Api from '@/api/s3';

const rootReducer = combineReducers({
  languageReducer,
  filmsReducer,
});

const composeEnhancers = typeof window === 'undefined' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__!;

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
  | FilmsActions
  | LanguageActions;

export const store = createStore(rootReducer, enhancer);

export default store;

export const getStore = () => store;
