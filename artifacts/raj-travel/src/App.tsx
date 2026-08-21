import { useEffect, useState, type FormEvent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, Compass, Globe2, Heart, Landmark, Menu, Mountain, MoveRight, ShieldCheck, Sparkles, Waves, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

const destinations = [
  { name: 'Paris', region: 'France · The Art of Living', image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1400' },
  { name: 'Dubai', region: 'United Arab Emirates · Modern Wonder', image: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Switzerland', region: 'Alpine Europe · Quiet Grandeur', image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Bali', region: 'Indonesia · Island Rituals', image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Maldives', region: 'Indian Ocean · Blue Hours', image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Singapore', region: 'Singapore · A Garden City', image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1200' },
];

const experiences = [
  { name: 'Luxury Escapes', copy: 'Suites with a point of view, private access, and a pace that belongs entirely to you.', icon: Sparkles },
  { name: 'Family Holidays', copy: 'Thoughtful days where every generation finds something worth remembering.', icon: Heart },
  { name: 'Romantic Getaways', copy: 'The tables, terraces, and slow mornings that become your shared story.', icon: Waves },
  { name: 'Adventure Journeys', copy: 'Wild landscapes, beautifully considered — and a soft landing at the end.', icon: Mountain },
  { name: 'Cultural Experiences', copy: 'A city seen through the people who know its best-kept doors.', icon: Landmark },
  { name: 'Business Travel', copy: 'Seamless movement and quiet efficiency for the journeys that matter.', icon: BriefcaseBusiness },
];

const reasons = [
  { title: 'Personal, not packaged', copy: 'A considered conversation comes before any itinerary. Your journey starts with how you want to feel.', icon: Compass },
  { title: 'Details, quietly handled', copy: 'From the preferred room to the perfect transfer, every moving piece is anticipated and cared for.', icon: ShieldCheck },
  { title: 'A world of trusted doors', copy: 'Our handpicked partners turn access into something more human, more local, and more memorable.', icon: Globe2 },
];

function LogoMark() {
  return (
    <svg className="rt-mark" viewBox="0 0 50 68" aria-label="Raj Travel journey mark" role="img">
      <path d="M8 60V26C8 13 16 5 25 5s17 8 17 21v34" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M25 25c12 1 17 4 14 9-3 5-16 6-18 11-2 5 9 5 9 10 0 4-7 7-14 9" fill="none" stroke="#c8a24d" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M25 9l1.8 4.4 4.2 1.2-4.2 1.3-1.8 4.3-1.8-4.3-4.2-1.3 4.2-1.2z" fill="#c8a24d" />
      <path d="M8 60l8-5M42 60l-8-5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function OrnamentalRule() {
  return <div className="rt-kicker-line" aria-hidden="true"><span>✦</span></div>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary resetKey="raj-travel-home">
          <RajTravelPage />
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RajTravelPage() {
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > 35);
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.rt-reveal').forEach((element) => revealObserver.observe(element));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  const goTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="rt-site">
      <header className={`rt-header ${compact ? 'is-compact' : ''}`} data-testid="header-navigation">
        <div className="rt-container rt-header-inner">
          <a className="rt-logo-link" href="#home" onClick={() => setMobileOpen(false)} data-testid="link-logo-home">
            <LogoMark />
            <span className="rt-logo-lockup">
              <span className="rt-logo-name">RAJ TRAVEL</span>
              <span className="rt-logo-tag">JOURNEYS, REDEFINED.</span>
            </span>
          </a>
          <nav className="rt-nav" aria-label="Primary navigation">
            {['about', 'destinations', 'experiences', 'services', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} data-testid={`link-nav-${item}`}>{item}</a>
            ))}
          </nav>
          <a className="rt-header-cta" href="#contact" data-testid="link-header-plan">Plan your trip</a>
          <button className="rt-menu" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} data-testid="button-mobile-menu">
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="rt-mobile-menu is-open" aria-label="Mobile navigation">
            {['about', 'destinations', 'experiences', 'services', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)} data-testid={`link-mobile-${item}`}>{item}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="rt-hero" aria-labelledby="hero-title">
        <div className="rt-container">
          <div className="rt-hero-content">
            <div className="rt-kicker-line rt-eyebrow rt-reveal">Est. for the beautifully curious</div>
            <p className="rt-hero-sub rt-reveal rt-delay-1">RAJ TRAVEL</p>
            <h1 id="hero-title" className="rt-reveal rt-delay-1">Journey Beyond Destinations.</h1>
            <p className="rt-hero-copy rt-reveal rt-delay-2">Bespoke journeys shaped around your rhythm, your curiosities, and the details you will talk about for years to come.</p>
            <div className="rt-hero-actions rt-reveal rt-delay-3">
              <button className="rt-button" onClick={() => goTo('destinations')} data-testid="button-explore-journeys">Explore journeys <ArrowUpRight size={14} /></button>
              <button className="rt-button is-outline" onClick={() => goTo('contact')} data-testid="button-plan-trip">Plan your trip <MoveRight size={14} /></button>
            </div>
          </div>
          <div className="rt-hero-meta">Thoughtful travel, without the noise</div>
          <a className="rt-scroll-cue" href="#about" aria-label="Scroll to introduction" data-testid="link-scroll-about">Discover <ArrowDown size={13} /></a>
        </div>
      </section>

      <section id="about" className="rt-section rt-intro" aria-labelledby="intro-title">
        <div className="rt-container">
          <div className="rt-intro-art rt-reveal">
            <div className="rt-intro-frame" aria-hidden="true" />
            <img className="rt-intro-image" src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="A quiet mountain lake surrounded by mist" />
            <div className="rt-intro-stamp"><span>THE ART OF THE JOURNEY</span></div>
          </div>
          <div className="rt-section-heading rt-reveal rt-delay-1">
            <div className="rt-kicker-line rt-eyebrow">The Raj point of view</div>
            <h2 id="intro-title">Travel, Curated With Purpose.</h2>
            <OrnamentalRule />
            <p>We believe the finest journeys are not measured by how far you go, but by how deeply you arrive. Raj Travel is a luxury travel studio for those who value comfort, trust, and a sense of discovery that feels entirely their own.</p>
            <p>Every recommendation is personal. Every detail has a reason. From a first conversation to the moment you return home, we make the extraordinary feel effortless.</p>
            <button className="rt-button" onClick={() => goTo('contact')} data-testid="button-start-conversation">Start a conversation <MoveRight size={14} /></button>
          </div>
        </div>
      </section>

      <section className="rt-section rt-values" aria-labelledby="values-title">
        <div className="rt-container">
          <div className="rt-section-heading rt-reveal">
            <div className="rt-kicker-line rt-eyebrow">What guides us</div>
            <h2 id="values-title">The values behind every view.</h2>
          </div>
          <div className="rt-values-grid rt-reveal rt-delay-1">
            {['Luxury', 'Trust', 'Exploration', 'Premium', 'Elegance', 'Reliability'].map((value, index) => (
              <div className="rt-value" key={value} data-testid={`text-value-${value.toLowerCase()}`}><span>0{index + 1}</span>{value}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="rt-section rt-destinations" aria-labelledby="destinations-title">
        <div className="rt-container">
          <div className="rt-section-heading rt-reveal">
            <div>
              <div className="rt-kicker-line rt-eyebrow">A world, well chosen</div>
              <h2 id="destinations-title">Places that stay with you.</h2>
            </div>
            <p>Iconic addresses, quiet corners, and the right way in. Begin anywhere.</p>
          </div>
          <div className="rt-destination-grid">
            {destinations.map((destination, index) => (
              <a className={`rt-destination-card rt-reveal rt-delay-${(index % 3) + 1}`} href="#contact" key={destination.name} data-testid={`card-destination-${destination.name.toLowerCase()}`}>
                <img src={destination.image} alt={`${destination.name} travel destination`} loading={index > 1 ? 'lazy' : 'eager'} />
                <div className="rt-destination-copy"><strong>{destination.name}</strong><span>{destination.region}</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="rt-section rt-experiences" aria-labelledby="experiences-title">
        <div className="rt-container">
          <div className="rt-section-heading rt-reveal">
            <div>
              <div className="rt-kicker-line rt-eyebrow">Travel, your way</div>
              <h2 id="experiences-title">Choose your feeling.</h2>
            </div>
            <p>There is no single way to see the world. Tell us what calls you, and we will shape the days around it.</p>
          </div>
          <div className="rt-experience-list">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <button className="rt-experience rt-reveal" key={experience.name} onClick={() => goTo('contact')} data-testid={`button-experience-${index + 1}`}>
                  <span className="rt-experience-number">0{index + 1}</span>
                  <h3><Icon size={18} strokeWidth={1.2} color="#c8a24d" /> {experience.name}</h3>
                  <p>{experience.copy}</p>
                  <span className="rt-experience-arrow"><ArrowUpRight size={16} /></span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="rt-section rt-why" aria-labelledby="why-title">
        <div className="rt-container">
          <div className="rt-why-portrait rt-reveal">
            <img src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Traveler looking across a dramatic coastal landscape" loading="lazy" />
            <div className="rt-why-label">A more considered way to travel</div>
          </div>
          <div className="rt-section-heading rt-reveal rt-delay-1">
            <div className="rt-kicker-line rt-eyebrow">Why Raj Travel</div>
            <h2 id="why-title">The luxury is in knowing it is handled.</h2>
            <p>We bring the calm of a trusted expert to every part of your journey — so you can be fully present for the parts that matter.</p>
            <div className="rt-reasons">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return <div className="rt-reason" key={reason.title}><Icon className="rt-reason-icon" size={21} strokeWidth={1.2} /><div><h3>{reason.title}</h3><p>{reason.copy}</p></div></div>;
              })}
            </div>
            <button className="rt-button" onClick={() => goTo('contact')} data-testid="button-design-journey">Design my journey <ArrowUpRight size={14} /></button>
          </div>
        </div>
      </section>

      <section className="rt-editorial" aria-labelledby="editorial-title">
        <div className="rt-container">
          <div className="rt-editorial-content rt-reveal">
            <div className="rt-kicker-line rt-eyebrow">Featured editorial experience</div>
            <h2 id="editorial-title">Your Next Extraordinary Journey.</h2>
            <p>Some journeys are planned around a place. The best ones are planned around a story: a private table in an old city, a train through the Alps, a morning when the sea is all yours.</p>
            <button className="rt-button" onClick={() => goTo('contact')} data-testid="button-read-editorial">Tell us your story <MoveRight size={14} /></button>
          </div>
          <span className="rt-editorial-detail">TRAVEL NOTES · VOL. 01</span>
        </div>
      </section>

      <section className="rt-section rt-testimonials" aria-labelledby="testimonials-title">
        <div className="rt-container">
          <div className="rt-section-heading rt-reveal">
            <div className="rt-kicker-line rt-eyebrow">Words from the road</div>
            <h2 id="testimonials-title">Returned with more than photographs.</h2>
            <p>The mark of a good journey is how it keeps unfolding once you are home.</p>
          </div>
          <div className="rt-testimonial-grid">
            {[
              ['“', 'Raj understood the trip we were trying to have before we knew how to describe it. Every day felt unhurried, personal, and quietly perfect.', 'Anika & Rohan · Mumbai'],
              ['“', 'The attention to detail was exceptional. We only had to be present — every transfer, table, and small surprise was already in place.', 'Meera S. · London'],
              ['“', 'It felt less like booking travel and more like having a brilliant friend on the ground in every city.', 'Arjun K. · New Delhi'],
            ].map(([mark, quote, author], index) => (
              <article className="rt-testimonial rt-reveal" key={author} data-testid={`testimonial-${index + 1}`}>
                <span className="rt-quote">{mark}</span><blockquote>{quote}</blockquote><cite>{author}</cite>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="rt-contact" aria-labelledby="contact-title">
        <div className="rt-container">
          <div className="rt-kicker-line rt-eyebrow rt-reveal">The first step is a conversation</div>
          <h2 id="contact-title" className="rt-reveal rt-delay-1">Your Journey Begins Here.</h2>
          <p className="rt-reveal rt-delay-2">Share a little about where you are dreaming of going. We will come back to you within one working day with a thoughtful first direction.</p>
          {submitted ? (
            <div className="rt-reveal is-visible" role="status" data-testid="status-contact-success"><Check size={18} /> Thank you. We will be in touch shortly.</div>
          ) : (
            <form className="rt-contact-form rt-reveal rt-delay-3" onSubmit={handleSubmit}>
              <label><span className="sr-only">Your name</span><input aria-label="Your name" name="name" placeholder="Your name" required data-testid="input-contact-name" /></label>
              <label><span className="sr-only">Email address</span><input aria-label="Email address" name="email" type="email" placeholder="Email address" required data-testid="input-contact-email" /></label>
              <label><span className="sr-only">Where would you like to go?</span><input aria-label="Where would you like to go?" name="destination" placeholder="Where would you like to go?" required data-testid="input-contact-destination" /></label>
              <button className="rt-button" type="submit" data-testid="button-submit-contact">Begin planning <ArrowUpRight size={14} /></button>
            </form>
          )}
          <div className="rt-contact-info"><a href="mailto:hello@rajtravel.studio" data-testid="link-contact-email">hello@rajtravel.studio</a><a href="tel:+912240001208" data-testid="link-contact-phone">+91 22 4000 1208</a><span>Mumbai · Worldwide</span></div>
        </div>
      </section>

      <footer className="rt-footer" aria-label="Footer">
        <div className="rt-container">
          <div className="rt-footer-top">
            <div className="rt-footer-brand">
              <a className="rt-logo-link" href="#home" data-testid="link-footer-logo"><LogoMark /><span className="rt-logo-lockup"><span className="rt-logo-name">RAJ TRAVEL</span><span className="rt-logo-tag">JOURNEYS, REDEFINED.</span></span></a>
              <p>A refined travel studio for journeys that feel entirely your own.</p>
            </div>
            <nav className="rt-footer-nav" aria-label="Footer navigation">
              {['home', 'about', 'destinations', 'experiences', 'services', 'contact'].map((item) => <a key={item} href={`#${item}`} data-testid={`link-footer-${item}`}>{item}</a>)}
            </nav>
          </div>
          <div className="rt-footer-bottom"><span>© 2025 Raj Travel Studio</span><span>Journeys, redefined.</span></div>
        </div>
      </footer>
    </main>
  );
}

export default App;