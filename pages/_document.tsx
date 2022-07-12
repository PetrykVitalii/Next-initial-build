import {
  Html, Head, NextScript, Main,
} from 'next/document';

const Document: React.FC = () => (
  <Html>
    <Head>
      <link rel="preload" href="https://fonts.googleapis.com" />
      <link rel="preload" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
