import { useEffect, useState } from 'react'
import heroVideo from './assets/hero-video.mp4'

const expertiseItems = [
  {
    id: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    text: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    bg: 'panel panel-ice',
    visual: 'shape',
    cta: 'Meer over social strategie',
  },
  {
    id: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    text: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    bg: 'panel panel-pink',
    visual: 'image',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    cta: 'Meer over content creatie',
  },
  {
    id: '03',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    text: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    bg: 'panel panel-green',
    visual: 'image',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    cta: 'Meer over activatie',
  },
  {
    id: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    text: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    bg: 'panel panel-blue',
    visual: 'video',
    cta: 'Meer over data',
  },
]

const workItems = [
  {
    title: 'Van nul naar vol, binnen 3 weken',
    brand: 'Bullit',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Zacht in smaak, sterk in beeld',
    brand: 'Roasta',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Content die écht smaakt (en raakt)',
    brand: 'Loco',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
  },
]

const logos = ['seesing flex', 'de graafschap college', 'fides', 'srhk', 'knltb', 'talententuin']

function ArrowChip() {
  return <span className="arrow-chip">→</span>
}

function CTAButton({ children, light = false }) {
  return (
    <a href="#contact" className={`cta-button ${light ? 'light' : ''}`}>
      <span>{children}</span>
      <ArrowChip />
    </a>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="wrap nav-row">
          <a href="#top" className="brandmark" aria-label="Get Hyped">
            <img
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
              alt="Get Hyped"
            />
          </a>

          <nav className="desktop-nav-pill">
            <a href="#expertises">Expertises</a>
            <a href="#work" className="is-active">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="results-btn desktop-results">
            <span>Get Results</span>
            <span className="fire-dot">🔥</span>
          </a>

          <button
            type="button"
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-drawer ${menuOpen ? 'show' : ''}`}>
          <div className="mobile-panel">
            <a href="#expertises" onClick={closeMenu}>Expertises</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="#contact" className="results-btn mobile-results" onClick={closeMenu}>
              <span>Get Results</span>
              <span className="fire-dot">🔥</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <h1>Get Hyped. Get Noticed. Get Results.</h1>
            <p>Klaar met gokken op content die niets oplevert?</p>
          </div>

          <div className="hero-stack">
            <article className="hero-card stat blue tilt-left">
              <strong>10M+</strong>
              <span>Organische views</span>
            </article>

            <div className="hero-card video center-media">
              <video autoPlay muted loop playsInline>
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>

            <article className="hero-card stat green">
              <strong>30+</strong>
              <span>Merken geholpen</span>
            </article>

            <div className="hero-card image tilt-right">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                alt="Campaign production"
              />
            </div>
          </div>
        </section>

        <section id="about" className="about wrap">
          <h2>
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h2>
          <div className="about-grid">
            <div className="portrait-card">
              <img
                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
                alt="Team member"
              />
            </div>
            <div className="about-text">
              <p>
                We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
              </p>
              <CTAButton light>Leer ons kennen</CTAButton>
            </div>
            <button className="scroll-cue" aria-label="Scroll down">↓</button>
          </div>
        </section>

        <section id="expertises" className="expertises wrap">
          {expertiseItems.map((item) => (
            <article className={item.bg} key={item.id}>
              <div className="panel-info">
                <span className="tag">Expertise</span>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.text}</p>
                <CTAButton light={item.id !== '01'}>{item.cta}</CTAButton>
              </div>

              <div className="panel-visual">
                <span className="panel-number">{item.id}</span>
                {item.visual === 'shape' && <div className="abstract-block" />}
                {item.visual === 'image' && (
                  <div className="media-frame">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                {item.visual === 'video' && (
                  <div className="media-frame wide-video">
                    <video autoPlay muted loop playsInline>
                      <source src={heroVideo} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section id="work" className="work wrap">
          <div className="work-intro">
            <div>
              <h2>Content dat scoort.</h2>
            </div>
            <div>
              <p>
                Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
              </p>
              <CTAButton>Bekijk al ons werk</CTAButton>
            </div>
          </div>

          <div className="work-grid">
            {workItems.map((item) => (
              <article className="work-card" key={item.title}>
                <div className="work-thumb">
                  <img src={item.image} alt={item.brand} />
                </div>
                <div className="work-copy">
                  <h3>{item.title}</h3>
                  <p>{item.brand}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="brands wrap">
          <h2>These brands got hyped.</h2>
          <div className="logo-grid">
            {logos.map((logo) => (
              <div className="logo-box" key={logo}>{logo}</div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact wrap">
          <div className="contact-slab">
            <div className="contact-copy">
              <h2>Let&apos;s Get Hyped!</h2>
              <div className="contact-actions">
                <CTAButton light>Mail ons direct</CTAButton>
                <a href="#top" className="results-btn inline-results">
                  <span>Get Results</span>
                  <span className="fire-dot">🔥</span>
                </a>
              </div>
            </div>

            <footer className="footer-grid">
              <div className="footer-brand">
                <img
                  src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg"
                  alt="Get Hyped"
                />
              </div>
              <div className="footer-links">
                <a href="#expertises">Expertises</a>
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-meta">
                <span>info@gethyped.nl</span>
                <span>+31 6 1533 7496</span>
                <span>© 2025 Get Hyped</span>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}
