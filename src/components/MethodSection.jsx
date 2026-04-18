

import useReveal from '../hooks/useReveal'

export default function MethodSection() {
  useReveal()
 
  return (
    <section className="method-section" id="how-it-works">
      <div className="container">
        <div className="reveal">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">A Clear Process, Tailored to the Individual</h2>
          <p className="section-desc">Focus on expression, not just correctness.</p>
        </div>
        <div className="method-grid">
          <div className="method-card reveal">
            <div className="method-num">01</div>
            <h3>We Identify the Starting Point</h3>
            <p>We begin with a conversation to understand current ability and communication style. No tests. Just a real conversation.</p>
          </div>
          <div className="method-card reveal reveal-delay-1">
            <div className="method-num">02</div>
            <h3>We Build Clear Expression</h3>
            <p>We guide full ideas first, then refine accuracy through feedback. Students practice speaking in full sentences about things they already know.</p>
          </div>
          <div className="method-card reveal reveal-delay-2">
            <div className="method-num">03</div>
            <h3>Progress Doesn’t Stop After the Session</h3>
            <p>Communication improves beyond sessions through real-world use. English improves not just during sessions, but in how people think, speak, and respond.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
