

import useReveal from '../hooks/useReveal'

export default function ApproachSection() {
  useReveal()
 
  return (
    <section className="approach-section" id="approach">
      <div className="container">
        <div className="reveal">
          <span className="section-label">What Makes This Different</span>
          <h2 className="section-title">Expression first. Everything else follows.</h2>
          <p className="section-desc">We don't start with vocabulary lists or grammar drills. We start with what your child already knows and build from there.</p>
        </div>
        <div className="approach-grid">
          <div className="approach-card reveal">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Students Know More Than They Can Express</h3>
            <p>Your child already has thoughts, opinions, and understanding. The gap isn't knowledge—it's the ability to communicate it. We bridge that gap.</p>
          </div>
          <div className="approach-card reveal reveal-delay-1">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3>Focus on Clear Expression First</h3>
            <p>We prioritize getting the message out clearly before perfecting grammar. Full sentence speaking from day one builds the foundation for everything else.</p>
          </div>
          <div className="approach-card reveal reveal-delay-2">
            <div className="approach-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <h3>Confidence Through Communication</h3>
            <p>Confidence isn't taught—it's built. Through repeated, positive speaking experiences, your child develops the natural confidence to use English anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
