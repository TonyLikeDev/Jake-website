import useReveal from '../hooks/useReveal'
import '../styles/coaches.css'

export default function CoachesPage({ onOpenContact }) {
  useReveal()

  return (
    <main className="coaches-page">
      <section className="coaches-hero">
        <div className="container">
          <a href="#" className="coaches-back">← Back to Home</a>
          <span className="section-label reveal">OUR TEAM</span>
          <h1 className="coaches-title reveal reveal-delay-1">Meet Our <em className="gold-text">Coaches</em></h1>
          <p className="coaches-intro reveal reveal-delay-2">
            Every coach at Exprimio shares one standard: the signature expression-first coaching method.
            We help people feel relaxed, confident, and ready to speak — turning what they already know
            into natural, high-level English.
          </p>
        </div>
      </section>

      <section className="coaches-grid-section">
        <div className="container">
          <div className="coaches-grid">
            <article className="coach-card reveal">
              <div className="coach-card-image">
                <img src="/img/about.jpg" alt="Jake — Founder & Lead Coach" loading="lazy" />
                <span className="coach-badge">Founder</span>
              </div>
              <div className="coach-card-body">
                <h2 className="coach-name">Jake</h2>
                <p className="coach-role">Founder &amp; Lead Coach</p>
                <ul className="coach-credentials">
                  <li>10+ years coaching experience</li>
                  <li>1,000+ learners guided</li>
                  <li>International background — based in Vietnam</li>
                  <li>KET / PET &amp; IELTS preparation</li>
                </ul>
                <p className="coach-philosophy">
                  “My philosophy centers on accompanying growth. I build real trust and create a
                  relaxed space where individuals feel safe to express their ideas, take risks, and find
                  their unique voice.”
                </p>
              </div>
            </article>

            <article className="coach-card coach-card-placeholder reveal reveal-delay-1">
              <div className="coach-card-image coach-card-image-empty">
                <span className="coach-placeholder-icon">+</span>
              </div>
              <div className="coach-card-body">
                <h2 className="coach-name">More coaches coming soon</h2>
                <p className="coach-role">We are growing the team</p>
                <p className="coach-philosophy">
                  We are carefully selecting coaches who share the Exprimio standard. Every new coach
                  trains in our expression-first method before joining the team.
                </p>
              </div>
            </article>
          </div>

          <div className="coaches-footer-cta reveal">
            <h3>Ready to start your journey?</h3>
            <button type="button" className="btn-primary" onClick={onOpenContact}>Apply Now</button>
          </div>
        </div>
      </section>
    </main>
  )
}
