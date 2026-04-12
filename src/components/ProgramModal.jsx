import { useEffect } from 'react'

const programData = {
  group: {
    badge: 'Group Program',
    title: 'Group Classes',
    desc: 'Small-group sessions (max 4 students) focused on conversation, comprehension, and confidence-building. A great introduction before committing to 1-on-1. Most students continue after assessment.',
    features: [
      { title: 'Small Groups, Maximum Impact', text: 'Maximum 4 students per session ensures each student gets speaking time while benefiting from peer interaction. Groups are carefully matched by level and age.' },
      { title: 'Conversation-First Learning', text: 'Sessions built around real topics—science, culture, current events—not textbooks. Students practice expressing ideas they already understand, building fluency naturally.' },
      { title: 'Assessment Included', text: 'Every student starts with a level assessment during their trial. We group students at the right level and track progress throughout the program.' },
      { title: 'Pathway to 1-on-1', text: 'Most students transition to 1-on-1 sessions after assessment and initial group experience. The group format is an excellent starting point.' }
    ]
  },
  consultant: {
    badge: 'Most Popular',
    title: '1-on-1 Consultant',
    desc: 'Fully personalized 1-on-1 sessions tailored to your child\'s pace, interests, and goals. The core of the Golden Method—expression-first learning with real-time feedback.',
    features: [
      { title: 'Personalized Curriculum', text: 'Sessions designed around what your child already cares about. When the topic is interesting, the English flows naturally. No generic textbooks.' },
      { title: 'Real-Time Feedback', text: 'Every word your child speaks gets immediate, gentle correction. They learn to self-correct through guided conversation, building accuracy without sacrificing confidence.' },
      { title: 'Flexible Pacing', text: 'We adapt to your child\'s rhythm—no rushing, no holding back. Some students need more time on foundations; others are ready for advanced discussion quickly.' },
      { title: 'Regular Progress Reports', text: 'Parents receive consistent updates on their child\'s development—areas of improvement, current focus, and practical suggestions for practice at home.' }
    ]
  },
  jake: {
    badge: 'Limited Availability',
    title: '1-on-1 with Jake',
    desc: 'Premium tier with Jake as your dedicated tutor. Extended session time, priority scheduling, and the most intensive personalization available.',
    features: [
      { title: 'Extended Session Time', text: 'Sessions with Jake run longer—allowing deeper exploration of topics, more speaking practice, and more thorough feedback. Every minute is maximized.' },
      { title: 'Priority Scheduling', text: 'Premium students get first access to Jake\'s calendar. Sessions scheduled around your family\'s availability, not ours.' },
      { title: 'Maximum Personalization', text: 'Jake draws on years of experience to read your child\'s needs in real-time—adjusting pace, topics, and difficulty on the fly.' },
      { title: 'Weekly Progress Tracking', text: 'The most detailed reporting available. Weekly updates cover every area of improvement, current focus, and specific suggestions for home practice.' }
    ]
  },
  ielts: {
    badge: 'Specialist Program',
    title: 'IELTS Specialist',
    desc: 'Score-focused preparation for IELTS Academic and General Training. Covers all four skills—Listening, Reading, Writing, Speaking—with exam strategies, timed practice, and mock assessments.',
    features: [
      { title: 'All Four Skills Covered', text: 'Listening, Reading, Writing, Speaking—we develop all four systematically. We build a balanced profile so no single skill holds the overall score back.' },
      { title: 'Exam Strategies & Timed Practice', text: 'We teach exam-specific strategies—time management, question analysis, response structuring—so your child performs at their best under pressure.' },
      { title: 'Mock Assessments', text: 'Regular mock tests simulate real exam conditions. Your child becomes comfortable with the format, timing, and expectations before the actual test day.' },
      { title: 'Dedicated IELTS Specialists', text: 'Our team includes tutors who specialize exclusively in IELTS preparation. They know the scoring rubrics, common pitfalls, and where students gain the most points.' }
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
          <h3>Lesson Packages</h3>
          <div className="program-modal-packages-grid">
            <div className="program-modal-pkg">
              <div className="program-modal-pkg-lessons">20 Lessons</div>
              <h4>Starter</h4>
              <p>A solid foundation for new students exploring the method.</p>
            </div>
            <div className="program-modal-pkg featured">
              <span className="program-modal-pkg-badge">Most Popular</span>
              <div className="program-modal-pkg-lessons">30 Lessons</div>
              <h4>Growth</h4>
              <p>Enough sessions to see real transformation in expression.</p>
            </div>
            <div className="program-modal-pkg">
              <div className="program-modal-pkg-lessons">60 Lessons</div>
              <h4>Mastery</h4>
              <p>Deep, lasting fluency. The best per-session value.</p>
            </div>
          </div>
        </div>
        <a href="#contact" className="program-modal-cta" onClick={onClose}>Request a Trial Lesson</a>
      </div>
    </div>
  )
}
