

import useReveal from '../hooks/useReveal'

export default function Hero() {
  useReveal()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="reveal hero-badge">
            <div className="hero-badge-dot"></div>
            <span>Accepting Students for 2026</span>
          </div>
          <h1 className="reveal reveal-delay-1">Students Know More Than They Can <em>Express</em>.</h1>
          <p className="hero-desc reveal reveal-delay-2">Most just haven&apos;t been taught how to communicate it clearly in English.</p>
          <p className="hero-support reveal reveal-delay-2">We help students turn understanding into confident expression through structured, personalized lessons.</p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="#contact" className="btn-primary">Book a Trial Lesson</a>
            <a href="#how-it-works" className="btn-secondary">See How It Works</a>
          </div>
        </div>
      </div>
      <a href="#trust" className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line"></div>
      </a>
    </section>
  )
}
