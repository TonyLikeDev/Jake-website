import { useState } from 'react'


const faqs = [
  { q: 'How is this different from other English consulting?', a: 'Most tutoring focuses on test preparation, vocabulary lists, and grammar drills. The Golden Method focuses on the individual\'s ability to think, express, and communicate in English naturally. We use conversation and real topics as the foundation. Grammar and vocabulary are addressed within that context, not as isolated exercises.' },
  { q: 'My English level is quite basic. Is that okay?', a: 'Absolutely. Many of our participants start with limited English expression. The method is designed to meet people wherever they are and build from there. We use existing understanding as a bridge and gradually transition to thinking and speaking in English at a natural pace.' },
  { q: 'When will I see improvement?', a: 'Clients typically notice increased confidence within 4–6 weeks. More significant improvements in fluency and comprehension usually emerge around 3–4 months. This isn\'t a quick-fix program—the goal is lasting ability, not temporary improvement.' },
  { q: 'How does a session work?', a: 'Sessions are conducted online via Zoom, allowing for flexibility and consistency regardless of location. Each session is 45–60 minutes depending on the program. We keep our schedule intentionally limited to maintain quality.' },
  { q: 'How much does it cost?', a: 'Pricing varies by program and session frequency. We share detailed pricing during the trial consultation. We understand this is a significant commitment, which is why we offer a trial session first—so you can experience the method before making any financial decision.' },
  { q: 'How do I know they\'re improving?', a: 'Every program includes regular progress updates. You receive reports covering areas of growth, current focus, and actionable suggestions for real-world practice. Frequency depends on the program you choose.' }
]

import useReveal from '../hooks/useReveal'

export default function FAQ() {
  useReveal()
 
  const [openIndex, setOpenIndex] = useState(null)
  
  const midPoint = Math.ceil(faqs.length / 2)
  const leftCol = faqs.slice(0, midPoint)
  const rightCol = faqs.slice(midPoint)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="reveal">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common questions about the process.</h2>
        </div>
        <div className="faq-list">
          <div className="faq-column">
            {leftCol.map((faq, i) => (
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
          <div className="faq-column">
            {rightCol.map((faq, i) => {
              const actualIndex = i + midPoint
              return (
                <div className={`faq-item reveal${openIndex === actualIndex ? ' open' : ''} reveal-delay-${Math.min(actualIndex, 5)}`} key={actualIndex}>
                  <button className="faq-question" onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}>
                    <h4>{faq.q}</h4>
                    <div className="faq-icon"></div>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
