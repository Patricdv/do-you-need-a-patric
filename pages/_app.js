import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/toasty.css';
import '../styles/depoiments.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
