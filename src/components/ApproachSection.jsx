

import useReveal from '../hooks/useReveal'

export default function ApproachSection() {
  useReveal()
 
  return (
    <section className="approach-section" id="approach">
      <div className="container">
        <div className="reveal">
          <span className="section-label">What Makes This Different</span>
          <h2 className="section-title">The Student Already Knows. We Help Them Show It.</h2>
          <p className="section-desc">We don't start with vocabulary lists or drills. We start with what the student already knows and help them say it clearly in English.</p>
        </div>
        <div className="approach-grid">
          <div className="approach-card reveal">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>The Student Knows More Than They Can Say</h3>
            <p>They already have ideas, opinions, and understanding. The problem isn't knowledge - they just need help getting it out in English. That's exactly what we do.</p>
          </div>
          <div className="approach-card reveal reveal-delay-1">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3>Say It. Then Say It Better.</h3>
            <p>We focus on speaking in clear, full sentences. Getting the right answer comes second.</p>
          </div>
          <div className="approach-card reveal reveal-delay-2">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <h3>Confidence Comes From Doing, Not Drilling</h3>
            <p>The student doesn't build confidence in a workbook. They build it by speaking — in every lesson, from day one.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
