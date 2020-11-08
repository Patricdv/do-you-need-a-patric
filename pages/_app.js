import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/toasty.css';
import '../styles/depoiments.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
