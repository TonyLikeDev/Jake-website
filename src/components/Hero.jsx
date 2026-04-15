

import useReveal from '../hooks/useReveal'

export default function Hero() {
  useReveal()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="reveal hero-badge">
            <div className="hero-badge-dot"></div>
            <span>Accepting Students for summer break 2026</span>
          </div>
          <h1 className="reveal reveal-delay-1">Students Already Know More Than They Think. <em>Most just haven&apos;t been taught how to communicate it clearly in English.</em></h1>
          <p className="hero-sub reveal reveal-delay-2">The problem isn&apos;t understanding — it&apos;s expression.</p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="#contact" className="btn-primary">Request a Trial Appointment</a>
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
