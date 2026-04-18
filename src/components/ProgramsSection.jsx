

import useReveal from '../hooks/useReveal'

export default function ProgramsSection({ onOpenProgram }) {
  useReveal()
 
  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="reveal">
          <span className="section-label">PROGRAMS</span>
          <h2 className="section-title">Four programs. One commitment.</h2>
          <p className="section-desc">Every program is personalised to the individual's level. Choose what works best for you.</p>
        </div>
        <div className="programs-grid programs-grid-4">
          <div className="program-card featured reveal">
            <div className="program-badge">MOST POPULAR</div>
            <div className="program-age">GROUP</div>
            <h3 className="program-name">Group Sessions</h3>
            <p className="program-desc">Small groups, max 4. Conversation-focused. Build communication through real-world expression.</p>
            <p className="program-note">After assessment, we find the right fit for your goals and communication style.</p>
            <button className="program-cta" onClick={() => onOpenProgram('group')}>Learn More</button>
          </div>
          <div className="program-card reveal reveal-delay-1">
            <div className="program-age">INDIVIDUAL</div>
            <h3 className="program-name">1-on-1 Consultant</h3>
            <p className="program-desc">Fully personalised. Real-time feedback. The core of the Golden Method—expression-first learning with immediate guidance.</p>
            <button className="program-cta" onClick={() => onOpenProgram('consultant')}>Learn More</button>
          </div>
          <div className="program-card reveal reveal-delay-2">
            <div className="program-badge" style={{ background: 'rgba(201,151,58,0.15)', color: 'var(--gold)' }}>LIMITED AVAILABILITY</div>
            <div className="program-age">PREMIUM</div>
            <h3 className="program-name">1-on-1 with Jake</h3>
            <p className="program-desc">Premium. Limited availability. High-intensity personalization with our lead consultant.</p>
            <button className="program-cta" onClick={() => onOpenProgram('jake')}>Learn More</button>
          </div>
          <div className="program-card reveal reveal-delay-3">
            <div className="program-age">SPECIALIST</div>
            <h3 className="program-name">IELTS Specialist</h3>
            <p className="program-desc">Score-focused. All four skills covered. Strategic preparation for IELTS Academic and General Training.</p>
            <button className="program-cta" onClick={() => onOpenProgram('ielts')}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
