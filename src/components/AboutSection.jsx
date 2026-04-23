

import useReveal from '../hooks/useReveal'

export default function AboutSection() {
  useReveal()

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/img/about.jpg" alt="Jake — Lead Consultant" loading="lazy" width="1200" height="800" />
          </div>
          <div className="about-content">
            <span className="section-label reveal">ABOUT</span>
            <h3 className="reveal reveal-delay-1">I help learners <em className="gold-text">express</em> what they already understand in English.</h3>
            <p className="reveal reveal-delay-2">Simple ideas. Clear English. Real results.</p>
            <p className="reveal reveal-delay-3">Many people study for years, but still cannot speak clearly.
              Not because they don’t know, but because they cannot express.</p>
            <p className="reveal reveal-delay-4">We focus on thinking, speaking, and confidence.</p>
            <div className="about-stats reveal">
              <div>
                <span className="about-stat-num">8+ Years</span>
                <span className="about-stat-label">Consulting Experience</span>
              </div>
              <div>
                <span className="about-stat-num">1,000+</span>
                <span className="about-stat-label">Participants Guided</span>
              </div>
              <div>
                <span className="about-stat-num">7,000+</span>
                <span className="about-stat-label">Hours of Coaching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
