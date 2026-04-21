import { useEffect } from 'react'

const programData = {
  group: {
    badge: 'GROUP PROGRAM',
    title: 'Group Sessions',
    desc: 'Small-group sessions (max 4 participants) focused on conversation, comprehension, and confidence-building. Designed to deliver real progress in a shared-room setting.',
    features: [
      { title: 'Small Groups, Maximum Impact', text: 'Maximum 4 participants per session ensures each person gets speaking time while benefiting from peer interaction. Groups are carefully matched by level and age.' },
      { title: 'Conversation-First Learning', text: 'Sessions built around real topics—science, culture, current events—not textbooks. Participants practice expressing ideas they already understand, building fluency naturally.' },
      { title: 'Assessment Included', text: 'Every person starts with a level assessment during their trial. We group participants at the right level and track progress throughout the program.' },
      { title: 'Peer-Powered Practice', text: 'Learning alongside others at a similar level creates a natural, low-pressure environment to try new structures and build speaking confidence together.' }
    ]
  },
  consultant: {
    badge: 'MOST POPULAR',
    title: '1-on-1 Consultant',
    desc: 'Fully personalised 1-on-1 sessions tailored to your pace, interests, and goals. The core of the Golden Method—expression-first learning with real-time feedback.',
    features: [
      { title: 'Personalised Curriculum', text: 'Sessions designed around what you already care about. When the topic is interesting, the English flows naturally. No generic textbooks.' },
      { title: 'Real-Time Feedback', text: 'Every word spoken gets immediate, gentle guidance. Participants learn to self-correct through guided conversation, building accuracy without sacrificing confidence.' },
      { title: 'Flexible Pacing', text: 'We adapt to your rhythm—no rushing, no holding back. Some participants need more time on foundations; others are ready for advanced discussion quickly.' },
      { title: 'Regular Progress Reports', text: 'You receive consistent updates on your development—areas of improvement, current focus, and practical suggestions for real-world practice.' }
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
      { title: 'Dedicated IELTS Specialists', text: 'Our team includes consultants who specialise exclusively in IELTS preparation. They know the scoring rubrics, common pitfalls, and where you gain the most points.' }
    ]
  }
}

export default function ProgramModal({ programKey, onClose }) {
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
          <h3>Session Packages</h3>
          <div className="program-modal-packages-grid">
            <div className="program-modal-pkg">
              <div className="program-modal-pkg-lessons">20 Sessions</div>
              <h4>Starter</h4>
              <p>A solid foundation for new participants exploring the method.</p>
            </div>
            <div className="program-modal-pkg featured">
              <span className="program-modal-pkg-badge">Most Popular</span>
              <div className="program-modal-pkg-lessons">30 Sessions</div>
              <h4>Growth</h4>
              <p>Enough sessions to see real transformation in expression.</p>
            </div>
            <div className="program-modal-pkg">
              <div className="program-modal-pkg-lessons">60 Sessions</div>
              <h4>Mastery</h4>
              <p>Deep, lasting fluency. The best per-session value.</p>
            </div>
          </div>
        </div>
        <a href="#contact" className="program-modal-cta" onClick={onClose}>Request a Trial</a>
      </div>
    </div>
  )
}
