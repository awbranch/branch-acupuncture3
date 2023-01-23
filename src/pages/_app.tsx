import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Page from 'components/Page';
import TagManager from 'react-gtm-module';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-M63LRKF' });
  });
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Branch Acupuncture Center</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default App;
