import Head from 'next/head';
import dynamic from 'next/dynamic';

const WavyRainbow = dynamic(() => import('../components/WavyRainbow'));
const DepoimentCard = dynamic(() => import('../components/DepoimentCard'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Do you need a Patric?</title>
      </Head>

      <main className="home">
        <section>
          <WavyRainbow />

          <div className="pump-up">YES YOU DO!</div>

          <div className="late-content">
            <strong className="gradient-text-shadow">
              Here are some good qualities
              <br />
              that can help you make your mind:
            </strong>

            <ul>
              <li style={{ '--i': '0.2s' } as any}>Awesome CSS skills</li>
              <li style={{ '--i': '0.4s' } as any}>High quality HTML</li>
              <li style={{ '--i': '0.6s' } as any}>
                Some crazy React & Next.js tricks
              </li>
              <li style={{ '--i': '0.8s' } as any}>Pro javascript with ES6+</li>
              <li style={{ '--i': '1s' } as any}>Unbelievable *JOKES*</li>
            </ul>

            <div className="find-out-more gradient-text-shadow">
              Find out more about this amazing person
              <br />
              through those beatiful and totally not biased testimonials!
            </div>
          </div>
        </section>

        <section className="depoiments">
          <DepoimentCard
            quote="What to say about this guy I barely know but consider a lot?"
            author="Gardens, Carol"
            image={require('./images/carol.jpg')}
          />

          <DepoimentCard
            quote="The greatest and biggest guy I've ever seen. Awesome company to
            unravel the secrets of life, universe, and more!"
            author="Willis, Mauruce"
            image={require('./images/mauruce-willis.jpg')}
          />

          <DepoimentCard
            quote="This guy has what is needed to smash a female rat."
            author="Ram, Lucas"
            image={require('./images/medieval-ram.jpg')}
          />

          <DepoimentCard
            quote="Awesome."
            author="Narudo, Reo"
            image={require('./images/reonarudo.jpg')}
          />

          <DepoimentCard
            quote="Extremely competent professional. I never saw someone similar on
            the market."
            author="Colusso, Genaro"
            image={require('./images/genaro.jpg')}
          />

          <DepoimentCard
            quote="The best jokes, codes and paçoquinhas in the country."
            author="Blue Thunder, Ronai"
            image={require('./images/ronai.jpg')}
          />

          <DepoimentCard
            quote="Literally a guy who knows how to bring awesome experiences to
            humanity!"
            author="Borges, Rapha"
            image={require('./images/rapha-sun.jpg')}
          />

          <DepoimentCard
            quote="The best wizard I've ever met!"
            author="Lugas, The"
            image={require('./images/lugas.jpg')}
          />

          <DepoimentCard
            quote="Probably better than Half Life 3."
            author="Bollis, Luiz"
            image={require('./images/luiz-bollis.jpg')}
          />

          <DepoimentCard
            quote="Better than Half Life 3."
            author="Bollis, Future"
            image={require('./images/future-bollis.jpg')}
          />

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
          <h3 className="rainbow-text">Breathtaking Social Media!</h3>

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
