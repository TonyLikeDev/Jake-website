import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const programs = [
  {
    key: 'group',
    tag: 'GROUP',
    name: 'Group Sessions',
    hours: '1 hr / session · up to 4 learners',
    highlight: 'Shared-room practice',
    desc: 'Small groups, max 4. Conversation-focused. Build communication through real-world expression.',
    badge: 'MOST POPULAR',
  },
  {
    key: 'consultant',
    tag: 'INDIVIDUAL',
    name: '1-on-1 Consultant',
    hours: '1 hr / session · fully personalised',
    highlight: 'Personal pace & topics',
    desc: 'Real-time feedback tailored to your level. Expression-first learning with immediate guidance.',
  },
  {
    key: 'jake',
    tag: 'INTENSIVE',
    name: '1-on-1 Intensive',
    hours: '90 min / session · extended format',
    highlight: 'Longer sessions, deeper work',
    desc: 'Extended session time for deeper topic exploration and more speaking practice per meeting.',
    badge: 'LIMITED AVAILABILITY',
  },
  {
    key: 'ielts',
    tag: 'SPECIALIST',
    name: 'IELTS Specialist',
    hours: '1 hr / session · exam-focused',
    highlight: 'Score-focused prep',
    desc: 'All four skills covered. Strategic preparation for IELTS Academic and General Training.',
  },
]

export default function ProgramsSection({ onOpenProgram }) {
  useReveal()
  const [selected, setSelected] = useState('group')

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="reveal">
          <span className="section-label">PROGRAMS</span>
          <h2 className="section-title">Four programs. One commitment.</h2>
          <p className="section-desc">Every program is personalised to the individual's level. Choose what works best for you.</p>
        </div>
        <div className="programs-grid programs-grid-4">
          {programs.map((p, i) => (
            <div
              key={p.key}
              className={`program-card reveal${i ? ` reveal-delay-${i}` : ''}${selected === p.key ? ' featured' : ''}`}
              onClick={() => setSelected(p.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(p.key) } }}
            >
              {p.badge && <div className="program-badge">{p.badge}</div>}
              <div className="program-age">{p.tag}</div>
              <h3 className="program-name">{p.name}</h3>
              <div className="program-hours">{p.hours}</div>
              <div className="program-highlight">{p.highlight}</div>
              <p className="program-desc">{p.desc}</p>
              <button
                className="program-cta"
                onClick={(e) => { e.stopPropagation(); onOpenProgram(p.key) }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
