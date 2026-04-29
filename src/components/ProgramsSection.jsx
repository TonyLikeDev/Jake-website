import { useState, useRef, useEffect } from 'react'
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
    name: '1-on-1 Focused',
    hours: '1 hr / session · fully personalised',
    highlight: 'Personal pace & topics',
    desc: 'Real-time feedback tailored to your level. Expression-first learning with immediate guidance.',
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
  const [activeIndex, setActiveIndex] = useState(0)
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const card = el.firstElementChild
        if (!card) return
        const width = card.getBoundingClientRect().width + 14 // 14 is gap
        const idx = Math.round(el.scrollLeft / width)
        setActiveIndex(Math.max(0, Math.min(programs.length - 1, idx)))
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const scrollToIndex = (idx) => {
    const el = gridRef.current
    if (!el) return
    const next = Math.max(0, Math.min(programs.length - 1, idx))
    const card = el.firstElementChild
    const width = card ? card.getBoundingClientRect().width + 14 : el.clientWidth
    el.scrollTo({ left: next * width, behavior: 'smooth' })
  }

  const prev = () => scrollToIndex(activeIndex - 1)
  const next = () => scrollToIndex(activeIndex + 1)

  return (
    <section className="programs-section" id="programs">
      <div className="container">
        <div className="reveal">
          <span className="section-label">PROGRAMS</span>
          <h2 className="section-title">Three programs. One commitment.</h2>
          <p className="section-desc">Every program is personalised to the individual's level. Choose what works best for you.</p>
        </div>
        
        <div className="programs-carousel-wrapper">
          <button 
            className={`programs-arrow programs-arrow-prev${activeIndex === 0 ? ' disabled' : ''}`} 
            onClick={prev}
            aria-label="Previous program"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="programs-grid programs-grid-3" ref={gridRef}>
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

          <button 
            className={`programs-arrow programs-arrow-next${activeIndex === programs.length - 1 ? ' disabled' : ''}`} 
            onClick={next}
            aria-label="Next program"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
