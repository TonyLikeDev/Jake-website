import { useState, useRef, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import '../styles/programs.css'

const programs = [
  {
    key: 'group',
    tag: 'GROUP WORKSHOPS',
    name: 'Group Workshops',
    hours: 'From ¥210/hr · 1, 1.5 or 2-hour blocks',
    highlight: 'Shared-room practice',
    desc: 'Small groups (usually 3–6 students) focused on speaking, understanding, and confidence.',
    badge: 'MOST POPULAR',
  },
  {
    key: 'coaching',
    tag: '1-ON-1 COACHING',
    name: '1-on-1 Coaching',
    hours: 'From ¥310/hr · 30 min to 1.5-hour blocks',
    highlight: 'Personal pace & topics',
    desc: 'Fully personalized sessions focused on clear expression and real communication.',
    badge: 'LIMITED AVAILABILITY',
  },
  {
    key: 'ielts',
    tag: 'SPECIALIST',
    name: 'IELTS Specialist',
    hours: 'Exam-focused coaching · Cambridge-aligned',
    highlight: 'Score-focused prep',
    desc: 'Focused preparation for IELTS Academic and General Training.',
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
