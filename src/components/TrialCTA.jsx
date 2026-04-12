

import useReveal from '../hooks/useReveal'

export default function TrialCTA() {
  useReveal()
 
  return (
    <section className="trial-cta-section" id="trial">
      <div className="container">
        <div className="trial-cta-content reveal">
          <span className="section-label">Start Here</span>
          <h2 className="section-title">Request a Trial Lesson</h2>
          <p className="section-desc" style={{ maxWidth: 600 }}>Your trial lesson is more than a free sample—it's a level assessment. We'll evaluate where your child is, identify strengths, and recommend the right program and placement.</p>
          <a href="#contact" className="btn-primary">Request a Trial Lesson</a>
          <p className="trial-note">No commitment required. We'll follow up to schedule your session.</p>
        </div>
      </div>
    </section>
  )
}
