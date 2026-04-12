

import useReveal from '../hooks/useReveal'

export default function ProgramsSection({ onOpenProgram }) {
  useReveal()
 
  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Programs</span>
          <h2 className="section-title">Four programs. One commitment.</h2>
          <p className="section-desc">Every program is personalized to your child's level and goals. Choose the format that works best for your family.</p>
        </div>
        <div className="programs-grid programs-grid-4">
          <div className="program-card reveal">
            <div className="program-age">Group</div>
            <h3 className="program-name">Group Classes</h3>
            <p className="program-desc">Small-group sessions (max 4 students) focused on conversation, comprehension, and confidence-building. Great introduction before committing to 1-on-1.</p>
            <p className="program-note">Most students continue after assessment</p>
            <button className="program-cta" onClick={() => onOpenProgram('group')}>Learn More</button>
          </div>
          <div className="program-card featured reveal reveal-delay-1">
            <div className="program-badge">Most Popular</div>
            <div className="program-age">Individual</div>
            <h3 className="program-name">1-on-1 Consultant</h3>
            <p className="program-desc">Fully personalized 1-on-1 sessions tailored to your child's pace, interests, and goals. The core of the Golden Method—expression-first learning with real-time feedback.</p>
            <button className="program-cta" onClick={() => onOpenProgram('consultant')}>Learn More</button>
          </div>
          <div className="program-card reveal reveal-delay-2">
            <div className="program-badge" style={{ background: 'rgba(201,151,58,0.15)', color: 'var(--gold)' }}>Limited Availability</div>
            <div className="program-age">Premium</div>
            <h3 className="program-name">1-on-1 with Jake</h3>
            <p className="program-desc">Premium tier with Jake as your dedicated tutor. Extended session time, priority scheduling, and the most intensive personalization available.</p>
            <button className="program-cta" onClick={() => onOpenProgram('jake')}>Learn More</button>
          </div>
          <div className="program-card reveal reveal-delay-3">
            <div className="program-age">Specialist</div>
            <h3 className="program-name">IELTS Specialist</h3>
            <p className="program-desc">Score-focused preparation for IELTS Academic and General Training. Covers all four skills with exam strategies, timed practice, and mock assessments.</p>
            <button className="program-cta" onClick={() => onOpenProgram('ielts')}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
