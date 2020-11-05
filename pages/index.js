import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Do you need a Patric?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="wavy rainbow">
          <span style={{ '--i': '-0.1s' }}>D</span>
          <span style={{ '--i': '-0.2s' }}>o</span>&nbsp;
          <span style={{ '--i': '-0.3s' }}>y</span>
          <span style={{ '--i': '-0.4s' }}>o</span>
          <span style={{ '--i': '-0.5s' }}>u</span>&nbsp;
          <span style={{ '--i': '-0.6s' }}>n</span>
          <span style={{ '--i': '-0.7s' }}>e</span>
          <span style={{ '--i': '-0.8s' }}>e</span>
          <span style={{ '--i': '-0.9s' }}>d</span>&nbsp;
          <span style={{ '--i': '-1.0s' }}>a</span>&nbsp;
          <span style={{ '--i': '-1.1s' }}>P</span>
          <span style={{ '--i': '-1.2s' }}>a</span>
          <span style={{ '--i': '-1.3s' }}>t</span>
          <span style={{ '--i': '-1.4s' }}>r</span>
          <span style={{ '--i': '-1.5s' }}>i</span>
          <span style={{ '--i': '-1.6s' }}>c</span>
          <span style={{ '--i': '-1.7s' }}>?</span>
        </div>

        <div className="pump-up">YES YOU DO!</div>

        <img src="/img/patric-sliding.png" className="patric-sliding" />
      </main>

      <img />

      <style jsx>
        {`
          main {
            position: relative;
            padding: 3em 0;
            overflow: hidden;
            height: 100vh;
            width: 100%;
            max-width: 100%;
            justify-content: unset;
            align-items: unset;
            background-color: var(--dark);
            animation: colorUp 0.5s linear forwards;
            animation-delay: 3.5s;
          }

          .wavy {
            text-align: center;
            font-size: 4rem;
            transform: scale(1, 1.5) translateX(100vw);
            font-weight: bold;
            z-index: 1;
            width: 100%;
            display: inline-block;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            animation: comingIn 3s linear forwards;
            font-family: Impact, sans-serif;
            color: #24c0fd;
            -webkit-text-stroke: 0.01em #0000aa;
            filter: progid:DXImageTransform.Microsoft.Glow(Color=#0000aa,Strength=1);
            text-shadow: 0.13em -0.13em 0px #0000aa;
            letter-spacing: -0.05em;
          }

          .wavy span {
            position: relative;
            display: inline-block;
            animation: wavering 2s ease-in-out infinite;
            animation-delay: var(--i);
          }

          .pump-up {
            transform: scale(0);
            font-family: Impact, sans-serif;
            font-size: 6rem;
            font-weight: bold;
            text-align: center;
            margin: 1rem 0;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: #fffa28;
            background: radial-gradient(
              ellipse at center,
              #fffa28 0%,
              #ec8a39 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffa28', endColorstr='#ec8a39', GradientType=1);
            animation: scaleUp 1s ease forwards;
            animation-delay: 3.2s;
          }

          .patric-sliding {
            position: fixed;
            right: 100vw;
            bottom: 0;
            width: 468px;
            height: 320px;
            z-index: 1;
            animation: slidingIn 2s ease-out forwards;
            animation-delay: 3.2s;
          }

          @keyframes colorUp {
            to {
              background: #1a8bea;
            }
          }

          @keyframes scaleUp {
            0% {
              transform: scale(0) rotate(0);
            }
            100% {
              transform: scale(1) rotate(720deg);
            }
          }

          @keyframes slidingIn {
            20% {
              right: 2rem;
            }
            90% {
              right: 2rem;
            }
            100% {
              right: -468px;
            }
          }

          @keyframes comingIn {
            90% {
              transform: translateX(-200px);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes wavering {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}
