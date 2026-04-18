

import useReveal from '../hooks/useReveal'

export default function TrialCTA() {
  useReveal()
 
  return (
    <section className="trial-cta-section" id="trial">
      <div className="container">
        <div className="trial-cta-content reveal">
          <span className="section-label">START HERE</span>
          <h2 className="section-title">Request a Trial</h2>
          <p className="section-desc" style={{ maxWidth: 600 }}>This first session helps us understand your level, identify strengths, and recommend the right path forward. This isn’t a sample. It’s a structured starting point.</p>
          <a href="#contact" className="btn-primary">Request a Trial</a>
          <p className="trial-note">No commitment required. We'll follow up to schedule your session.</p>
        </div>
      </div>
    </section>
  )
}
