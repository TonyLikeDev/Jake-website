import { useEffect } from 'react'

const programData = {
  group: {
    badge: 'GROUP WORKSHOPS',
    title: 'Group Workshops',
    desc: 'Small-group workshops (max 4 participants) focused on conversation, comprehension, and confidence-building. Hosted on ClassIn, scheduled in 1, 1.5, or 2-hour blocks. Starting from ¥210/hr.',
    features: [
      { title: 'Small Groups, Maximum Impact', text: 'Maximum 4 participants per session ensures each person gets speaking time while benefiting from peer interaction. Groups are carefully matched by level and age.' },
      { title: 'Conversation-First Learning', text: 'Sessions built around real topics—science, culture, current events—not textbooks. Participants practice expressing ideas they already understand, building fluency naturally.' },
      { title: 'Fixed Weekly Schedule', text: 'Workshops follow a fixed weekly schedule to keep the group consistent. Missed classes are not rescheduled, which keeps every session focused and on-track for the whole group.' },
      { title: 'Peer-Powered Practice', text: 'Learning alongside others at a similar level creates a natural, low-pressure environment to try new structures and build speaking confidence together.' }
    ]
  },
  coaching: {
    badge: 'MOST POPULAR',
    title: '1-on-1 Coaching',
    desc: 'Fully personalized sessions tailored to your pace, interests, and goals. Expression-first learning with real-time feedback. Scheduled in 30-minute to 1.5-hour blocks for maximum engagement. Starting from ¥310/hr.',
    features: [
      { title: 'Personalized Curriculum', text: 'Sessions designed around your unique interests, using top-tier materials from Cambridge, National Geographic, and Pearson. When the topic is engaging, the English flows naturally.' },
      { title: 'Real-Time Feedback', text: 'Every word spoken gets immediate, gentle guidance. Participants learn to self-correct through guided conversation, building accuracy without sacrificing confidence.' },
      { title: 'Flexible Pacing', text: 'Sessions run from 30 minutes up to 1.5 hours — we adapt to your rhythm. Some participants need more time on foundations; others move into advanced discussion quickly.' },
      { title: 'Periodic Progress Reports', text: 'Parents and learners receive structured progress feedback from the Coach at fixed intervals during the package — clear, meaningful communication about real growth.' }
    ]
  },
  jake: {
    badge: 'LIMITED AVAILABILITY',
    title: '1-on-1 Intensive',
    desc: 'Our most intensive tier: extended 90-minute sessions, priority scheduling, and deeper progress tracking for learners who want to move faster.',
    features: [
      { title: 'Extended 90-Minute Sessions', text: 'Longer sessions allow deeper exploration of topics, more speaking practice, and more thorough feedback in every meeting. Every minute is maximized.' },
      { title: 'Priority Scheduling', text: 'Intensive participants get first access to the calendar. Sessions scheduled around your availability, not ours.' },
      { title: 'Maximum Personalisation', text: 'Pace, topics, and difficulty are tuned live to match what each session calls for — no two meetings feel the same.' },
      { title: 'Weekly Progress Tracking', text: 'The most detailed reporting available. Weekly updates cover every area of growth, current focus, and specific suggestions for practice.' }
    ]
  },
  ielts: {
    badge: 'SPECIALIST PROGRAM',
    title: 'IELTS Specialist',
    desc: 'Score-focused preparation for IELTS Academic and General Training. Covers all four skills—Listening, Reading, Writing, Speaking—with exam strategies, timed practice, and mock assessments.',
    features: [
      { title: 'All Four Skills Covered', text: 'Listening, Reading, Writing, Speaking—we develop all four systematically. We build a balanced profile so no single skill holds the overall score back.' },
      { title: 'Exam Strategies & Timed Practice', text: 'We teach exam-specific strategies—time management, question analysis, response structuring—so you perform at your best under pressure.' },
      { title: 'Mock Assessments', text: 'Regular mock tests simulate real exam conditions. Participants become comfortable with the format, timing, and expectations before the actual test day.' },
      { title: 'Dedicated IELTS Specialists', text: 'Our team includes coaches who specialise exclusively in IELTS preparation. They know the scoring rubrics, common pitfalls, and where you gain the most points.' }
    ]
  }
}

export default function ProgramModal({ programKey, onClose, onOpenContact }) {
  const handleCta = () => {
    onClose()
    onOpenContact()
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (programKey) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [programKey, onClose])

  if (!programKey || !programData[programKey]) return null

  const data = programData[programKey]

  return (
    <div className="program-modal open" onClick={onClose}>
      <button className="program-modal-close" onClick={onClose}>&times;</button>
      <div className="program-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="program-modal-badge">{data.badge}</span>
        <h2 className="program-modal-title">{data.title}</h2>
        <p className="program-modal-desc">{data.desc}</p>
        <div className="program-modal-features">
          {data.features.map((f, i) => (
            <div className="program-modal-feature" key={i}>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <div className="program-modal-packages">
          <h3>1-on-1 Coaching Packages</h3>
          <div className="program-modal-packages-grid">
            <div className="program-modal-pkg">
              <div className="program-modal-pkg-lessons">20 Lessons</div>
              <h4>Starter</h4>
              <p className="program-modal-pkg-price">¥350/hr · ¥7,000 total</p>
              <p>Recommended completion ~3 months. A solid foundation for new participants exploring the method.</p>
            </div>
            <div className="program-modal-pkg featured">
              <span className="program-modal-pkg-badge">Most Popular</span>
              <div className="program-modal-pkg-lessons">40 Lessons</div>
              <h4>Growth</h4>
              <p className="program-modal-pkg-price">Tier for alignment</p>
              <p>Recommended completion ~6 months. Enough sessions to see real transformation in expression.</p>
            </div>
            <div className="program-modal-pkg">
              <div className="program-modal-pkg-lessons">60 Lessons</div>
              <h4>Mastery</h4>
              <p className="program-modal-pkg-price">¥310/hr · ¥18,600 total</p>
              <p>Recommended completion ~9–12 months. Deep, lasting fluency. The best per-lesson value.</p>
            </div>
          </div>
        </div>
        <button type="button" className="program-modal-cta" onClick={handleCta}>Book an Assessment</button>
      </div>
    </div>
  )
}
