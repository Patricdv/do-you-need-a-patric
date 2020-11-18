import Head from 'next/head';

export default function DarkSide() {
  return (
    <>
      <Head>
        <title>Do you need a Dark Patric?</title>
      </Head>

      <main className="dark-side">
        <h2 data-text="Dark Side... of the Patric?">
          Dark Side... of the Patric?
        </h2>

        <p>
          Careful, this site is under construction.
          <img src={require('./images/safety-helmet.png')} />
        </p>
      </main>
    </>
  );
}
