import { useState } from 'react'


const faqs = [
  { q: 'How is this different from other English tutoring?', a: 'Most tutoring focuses on test preparation, vocabulary lists, and grammar drills. The Golden Method focuses on your child\'s ability to think, express, and communicate in English naturally. We use conversation and real topics as the foundation. Grammar and vocabulary are addressed within that context, not as isolated exercises.' },
  { q: 'My child\'s English level is quite basic. Is that okay?', a: 'Absolutely. Many of our students start with very limited English expression. The method is designed to meet students wherever they are and build from there. We use their native language understanding as a bridge and gradually transition them to thinking and speaking in English at their own pace.' },
  { q: 'How long before I see results?', a: 'Parents typically notice increased confidence within 4–6 weeks. More significant improvements in fluency and comprehension usually emerge around 3–4 months. This isn\'t a quick-fix program—the goal is lasting ability, not temporary improvement. We recommend a minimum commitment of 6 months to see meaningful transformation.' },
  { q: 'How do lessons work? Is it online or in-person?', a: 'Lessons are conducted online via Zoom, allowing for flexibility and consistency regardless of location. Each session is 45–60 minutes depending on the program. We keep our schedule intentionally limited to maintain quality—typically 8–10 active students at any given time.' },
  { q: 'What\'s the investment?', a: 'Pricing varies by program and session frequency. We\'re happy to share detailed pricing during the trial consultation. We understand this is a significant commitment, which is why we offer a trial lesson first—so you can experience the method before making any financial decision.' },
  { q: 'How do I track my child\'s progress?', a: 'Every program includes regular progress updates. Students receive regular reports covering areas of improvement, current focus, and actionable suggestions for practice at home. Frequency depends on the program you choose.' }
]

import useReveal from '../hooks/useReveal'

export default function FAQ() {
  useReveal()
 
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Parent FAQ</span>
          <h2 className="section-title">Questions parents ask before starting.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item reveal${openIndex === i ? ' open' : ''}${i === 0 ? '' : ` reveal-delay-${Math.min(i, 5)}`}`} key={i}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <h4>{faq.q}</h4>
                <div className="faq-icon"></div>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
