import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Main from '@/components/common/Main';

import store from '@/store';

import styles from '@/styles/pages/app.module.scss';
import '@/styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <title>CASINO</title>
    </Head>
    <div className={styles.container}>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  </Provider>
);

export default MyApp;
