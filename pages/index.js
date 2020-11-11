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

          <div className="depoiment-card">
            <div
              className="depoiment-image"
              style={{
                backgroundImage: 'url(' + require('./images/genaro.jpg') + ')',
              }}
            />

            <blockquote>
              <p>
                Extremely competent professional. I never saw someone similar on
                the market.
              </p>

              <cite>Colusso, Genaro</cite>
            </blockquote>
          </div>

          <div className="depoiment-card">
            <blockquote>
              <p>The best jokes, codes and paçoquinhas in the country.</p>

              <cite>Blue Thunder, Ronai</cite>
            </blockquote>

            <div
              className="depoiment-image"
              style={{
                backgroundImage: 'url(' + require('./images/ronai.jpg') + ')',
              }}
            />
          </div>

          <div className="depoiment-card">
            <div
              className="depoiment-image"
              style={{
                backgroundImage:
                  'url(' + require('./images/rapha-sun.jpg') + ')',
              }}
            />

            <blockquote>
              <p>
                Literally a guy who knows how bring awesome experiences to
                humanity!
              </p>

              <cite>Borges, Rapha</cite>
            </blockquote>
          </div>

          <div className="depoiment-card">
            <blockquote>
              <p>The best wizard I've ever met!</p>

              <cite>Lugas, The</cite>
            </blockquote>

            <div
              className="depoiment-image"
              style={{
                backgroundImage: 'url(' + require('./images/lugas.jpg') + ')',
              }}
            />
          </div>

          <div className="depoiment-card">
            <div
              className="depoiment-image"
              style={{
                backgroundImage:
                  'url(' + require('./images/luiz-bollis.jpg') + ')',
              }}
            />

            <blockquote>
              <p>Probably better than Half Life 3.</p>

              <cite>Bollis, Luiz</cite>
            </blockquote>
          </div>

          <div className="depoiment-card">
            <blockquote>
              <p>Better than Half Life 3.</p>

              <cite>Bollis, Future</cite>
            </blockquote>

            <div
              className="depoiment-image"
              style={{
                backgroundImage:
                  'url(' + require('./images/future-bollis.jpg') + ')',
              }}
            />
          </div>

          <div className="not-convinced-yet">
            <h1>Not convinced yet?</h1>
            <p>&bull;</p>
            <p>&bull;</p>
            <p>&bull;</p>
            <p>&bull;</p>
            <p>&bull;</p>
            <p>&bull;</p>
            <p>&bull;</p>
            <h3>All right! It's time for my final arguments</h3>
          </div>
        </section>

        <section className="gif-portrait">
          <h3 className="rainbow-text">Breathtaking Good Morning Gifs!</h3>

          <div
            className="my-portrait"
            style={{
              backgroundImage: `url(${require('./images/patric-portrait.png')})`,
            }}
          >
            <img src={require('./images/good-morning.gif')} />
          </div>
        </section>

        <section className="rumours">
          <h3 className="rainbow-text">There's no bad rumours about me!</h3>

          <div className="my-rumours">
            <div className="my-rumours-card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${require('./images/patric-austin.jpg')})`,
                }}
              />

              <p>I was never casted to be Austin Powers!</p>
            </div>

            <div className="my-rumours-card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${require('./images/patric-spongebob.jpg')})`,
                }}
              />

              <p>Spongebob is not my friend (but surely could be).</p>
            </div>

            <div className="my-rumours-card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${require('./images/patric-wizard.jpg')})`,
                }}
              />

              <p>I never used my great magic powers to the evil.</p>
            </div>
          </div>
        </section>

        <section className="follow-me">
          <h3 className="rainbow-text">Unbelievable Social Media!</h3>

          <a
            href="https://twitter.com/PatricVenturini"
            rel="noreferrer noopener"
            target="_blank"
            className="twitter"
          >
            <img
              src={require('./images/patric-twitter.png')}
              alt="Patric's Twitter"
            />
          </a>

          <a
            href="https://www.instagram.com/patricdv/"
            rel="noreferrer noopener"
            target="_blank"
            className="instagram"
          >
            <img
              src={require('./images/patric-instagram.png')}
              alt="Patric's Instagram"
            />
          </a>
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
