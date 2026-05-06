import { useEffect } from 'react'
import '../styles/modals.css'

const programData = {
  group: {
    badge: 'GROUP WORKSHOPS',
    title: 'Group Workshops',
    desc: 'Small groups (usually 3–6 students) focused on speaking, understanding, and confidence.',
    features: [
      { title: 'Small Groups. Real Speaking.', text: 'Every student speaks in every session. Groups are carefully matched by level and age.' },
      { title: 'Speak About Real Ideas', text: 'We don’t rely only on textbooks. Students discuss real topics and express ideas they already understand.' },
      { title: 'Consistent Weekly Schedule', text: 'Same group, same time each week. This builds momentum and real progress.' },
      { title: 'Learn With Others', text: 'Students improve faster when they speak with peers, especially with new people. This creates a natural, low-pressure environment.' }
    ]
  },
  coaching: {
    badge: 'MOST POPULAR',
    title: '1-on-1 Coaching',
    desc: 'Fully personalized sessions focused on clear expression and real communication.',
    features: [
      { title: 'Built Around the Student', text: 'Lessons follow the student’s interests and level. When the topic is engaging, English flows naturally.' },
      { title: 'Real-Time Feedback', text: 'We guide every sentence. Students learn to correct themselves while speaking.' },
      { title: 'Flexible Pace', text: 'Some students need more foundation. Others move quickly into advanced discussion.' },
      { title: 'Clear Progress Updates', text: 'Parents receive structured feedback on real improvement.' }
    ]
  },
  jake: {
    badge: 'LIMITED AVAILABILITY',
    title: '1-on-1 Intensive',
    desc: 'Our most intensive tier: extended 90-minute sessions, priority scheduling, and deeper progress tracking for learners who want to move faster.',
    features: [
      { title: 'Extended 90-Minute Sessions', text: 'Longer sessions allow deeper exploration of topics, more speaking practice, and more thorough feedback in every meeting. Every minute is maximized.' },
      { title: 'Priority Scheduling', text: 'Intensive participants get first access to the calendar. Sessions scheduled around your availability, not ours.' },
      { title: 'Maximum Personalisation', text: 'Pace, topics, and difficulty are tuned live to match what each session calls for - no two meetings feel the same.' },
      { title: 'Weekly Progress Tracking', text: 'The most detailed reporting available. Weekly updates cover every area of growth, current focus, and specific suggestions for practice.' }
    ]
  },
  ielts: {
    badge: 'SPECIALIST PROGRAM',
    title: 'IELTS Specialist',
    desc: 'Focused preparation for IELTS Academic and General Training.',
    features: [
      { title: 'All Skills. One Strategy.', text: 'Listening, Reading, Writing, Speaking—developed together for a balanced score.' },
      { title: 'Think, Then Answer Clearly', text: 'We train how to structure responses, not just memorize answers.' },
      { title: 'Timed Practice That Matters', text: 'Students learn how to manage time and perform under pressure.' },
      { title: 'Real Exam Experience', text: 'Mock tests build familiarity and confidence before test day.' },
      { title: 'Expert Guidance', text: 'Specialist coaches focus only on IELTS and know where students gain points.' }
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
              <div className="program-modal-pkg-sessions">20 Sessions</div>
              <h4>Starter</h4>
              <p>Recommended completion ~3 months. A solid foundation for new participants exploring the method.</p>
            </div>
            <div className="program-modal-pkg featured">
              <span className="program-modal-pkg-badge">Most Popular</span>
              <div className="program-modal-pkg-sessions">40 Sessions</div>
              <h4>Growth</h4>
              <p>Recommended completion ~6 months. Enough sessions to see real transformation in expression.</p>
            </div>
            <div className="program-modal-pkg">
              <div className="program-modal-pkg-sessions">60 Sessions</div>
              <h4>Mastery</h4>
              <p>Recommended completion ~9-12 months. Deep, lasting fluency. The best per-session value.</p>
            </div>
          </div>
        </div>
        <button type="button" className="program-modal-cta" onClick={handleCta}>Apply Now</button>
      </div>
    </div>
  )
}
