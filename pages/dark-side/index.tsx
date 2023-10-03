import Head from 'next/head';
import { useState } from 'react';

async function* generateSecret(): AsyncGenerator<string, undefined, string> {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const body = await res.json();
    yield body.value.replaceAll('Chuck Norris', 'Patric');
  } catch (e) {
    yield `The Oracle didn't find any secret in his search. Maybe try again later.`
  }
}

enum SECRET_STATUS {
  LOADING,
  DONE
}

interface Secret {
  status: SECRET_STATUS;
  value?: string
}

export default function DarkSide() {
  const [secret, setSecret] = useState<Secret>({
    status: SECRET_STATUS.DONE
  });

  const secretGenerator = generateSecret();

  async function getSecret() {
    setSecret({
      status: SECRET_STATUS.LOADING
    })
    const nextSecret = (await secretGenerator.next());
    if (nextSecret) {
      setSecret({
        status: SECRET_STATUS.DONE,
        value: nextSecret.value
      });
    }
  }

  return (
    <>
      <Head>
        <title>Do you need a Dark Patric?</title>
      </Head>

      <main className="dark-side">
        <section>
          <h2 data-text="Dark Side... of the Patric?">
            Dark Side... of the Patric?
          </h2>

          <p>
            Careful, this site is under construction.
            <img src={require('./images/safety-helmet.png')} />
          </p>
        </section>

        <section className="oracle-section">
          {secret.value ? <div className="patric-secrets">{secret.value}</div> : ''} 
          
          <button className="ask-oracle-button" onClick={getSecret} disabled={secret.status === SECRET_STATUS.LOADING}>Click here to find a new secret</button>
        </section>
      </main>
    </>
  );
}
