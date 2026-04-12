

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
          <h1 className="reveal reveal-delay-1">Students Already Know More Than They Think. <em>They just need the right voice.</em></h1>
          <p className="hero-desc reveal reveal-delay-2">We help them express it clearly and confidently in English.</p>
          <p className="hero-support reveal reveal-delay-2">Most students don't struggle with understanding — they struggle with expression.</p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="#programs" className="btn-primary">View Programs</a>
            <a href="#contact" className="btn-secondary">Request a Trial Lesson</a>
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
