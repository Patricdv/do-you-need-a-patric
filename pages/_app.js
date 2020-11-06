import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/toasty.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
