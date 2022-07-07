import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import store from '@/store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <title>Vitalik</title>
    </Head>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
