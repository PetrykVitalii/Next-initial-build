import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { LanguageActions } from '@/store/actions/language';

import languageReducer from '@/store/reducers/language';

// import MainApi from '@/api/main';
// import MainProtected from '@/api/main-protected';
// import MainCustomApi from '@/api/main-custom';
// import AnalyticsProtected from '@/api/analytics-protected';
// import AccountsServiceProtected from '@/api/accounts-service-protected';
// import PaymentsServiceProtected from '@/api/payments-service-protected';
// import S3Api from '@/api/s3';

const rootReducer = combineReducers({
  languageReducer,
});

const composeEnhancers = typeof window === 'undefined' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__!;

// const mainApi = new MainApi();
// const mainProtectedApi = new MainProtected();
// const mainCustomApi = new MainCustomApi();
// const analyticsProtectedApi = new AnalyticsProtected();
// const accountsServiceProtectedApi = new AccountsServiceProtected();
// const paymentsServiceProtectedApi = new PaymentsServiceProtected();
// const s3Api = new S3Api();

export const getApiArguments = () => ({
  // mainApi,
  // mainProtectedApi,
  // mainCustomApi,
  // analyticsProtectedApi,
  // accountsServiceProtectedApi,
  // paymentsServiceProtectedApi,
  // s3Api,
});

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument(getApiArguments()),
  ),
);

export type State = ReturnType<typeof rootReducer>;
export type Actions =
  | LanguageActions;

export const store = createStore(rootReducer, enhancer);

export default store;

export const getStore = () => store;
