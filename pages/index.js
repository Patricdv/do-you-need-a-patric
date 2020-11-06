import Head from 'next/head';
import dynamic from 'next/dynamic';

const WavyRainbow = dynamic(() => import('../components/WavyRainbow'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Do you need a Patric?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WavyRainbow />

        <div className="pump-up">YES YOU DO!</div>

        <div className="late-content">
          <strong>
            Here are some good qualities
            <br />
            that can make your mind:
          </strong>

          <ul>
            <li style={{ '--i': '0.2s' }}>Awesome CSS</li>
            <li style={{ '--i': '0.4s' }}>High quality HTML </li>
            <li style={{ '--i': '0.6s' }}>Some crazy React & Next.js</li>
            <li style={{ '--i': '0.8s' }}>Pro javascript with ES6+</li>
            <li style={{ '--i': '1s' }}>Incredible *JOKES*</li>
          </ul>
        </div>
      </main>

      <img
        src={require('./images/patric-sliding.png')}
        className="patric-sliding"
        alt="Me sliding throughout the page"
      />
    </>
  );
}
