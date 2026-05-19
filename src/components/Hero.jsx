

import useReveal from '../hooks/useReveal'
import '../styles/hero.css'

export default function Hero({ onOpenContact }) {
  useReveal()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="reveal hero-badge">
            <div className="hero-badge-dot"></div>
            <span>Accepting Applications for summer break 2026</span>
          </div>
          <h1 className="reveal reveal-delay-1">People Already Know More Than They Think. <em>We help them express it clearly and confidently in English.</em></h1>
          <p className="hero-sub reveal reveal-delay-2">Premium English Expression</p>
          <div className="hero-actions reveal reveal-delay-3">
            <button type="button" className="btn-primary" onClick={onOpenContact}>Apply Now</button>
            <a href="#how-it-works" className="btn-secondary">See How It Works</a>
          </div>
        </div>
      </div>
    </section>
  )
}
