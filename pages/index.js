import Head from 'next/head';
import dynamic from 'next/dynamic';
// import Footer from '../components/Footer';

const WavyRainbow = dynamic(() => import('../components/WavyRainbow'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Do you need a Patric?</title>
      </Head>

      <main>
        <WavyRainbow />

        <div className="pump-up">YES YOU DO!</div>

        <div className="late-content">
          <strong className="gradient-text-shadow">
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

          <div className="find-out-more gradient-text-shadow">
            Find out more about this incredible person
            <br />
            through those beatiful depoiments!
          </div>
        </div>

        <section className="depoiments">
          <div className="depoiment-card">
            <div
              className="depoiment-image"
              style={{
                backgroundImage: 'url(' + require('./images/carol.jpg') + ')',
              }}
            />

            <blockquote>
              <p>
                What to say about this guy I barely know but consider a lot?
              </p>

              <cite>Jardins, Carol</cite>
            </blockquote>
          </div>

          <div className="depoiment-card">
            <blockquote>
              <p>
                The most great and big guy I've ever seen. Awesome company to
                unravel the secrets of life, universe, and more!
              </p>

              <cite>Willis, Mauruce</cite>
            </blockquote>

            <div
              className="depoiment-image"
              style={{
                backgroundImage:
                  'url(' + require('./images/mauruce-willis.jpg') + ')',
              }}
            />
          </div>

          <div className="depoiment-card">
            <div
              className="depoiment-image"
              style={{
                backgroundImage:
                  'url(' + require('./images/medieval-ram.jpg') + ')',
              }}
            />

            <blockquote>
              <p>This guy has what is need to smash a female rat.</p>

              <cite>Ram, Lucas</cite>
            </blockquote>
          </div>

          <div className="depoiment-card">
            <blockquote>
              <p>Awesome.</p>

              <cite>Narudo, Reo</cite>
            </blockquote>

            <div
              className="depoiment-image"
              style={{
                backgroundImage:
                  'url(' + require('./images/reonarudo.jpg') + ')',
              }}
            />
          </div>
        </section>

        <img
          src={require('./images/patric-sliding.png')}
          className="patric-sliding"
          alt="Me sliding throughout the page"
        />
      </main>

      <Footer />
    </>
  );
}
