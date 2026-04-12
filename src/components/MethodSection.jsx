

import useReveal from '../hooks/useReveal'

export default function MethodSection() {
  useReveal()
 
  return (
    <section className="method-section" id="how-it-works">
      <div className="container">
        <div className="reveal">
          <span className="section-label">How Lessons Work</span>
          <h2 className="section-title">A clear process, tailored to your child.</h2>
          <p className="section-desc">Focus on expression, not just correctness.</p>
        </div>
        <div className="method-grid">
          <div className="method-card reveal">
            <div className="method-num">01</div>
            <h3>Calibrate the Right Level</h3>
            <p>We begin with a clear assessment—understanding exactly where your child is now. Not what they've memorized, but what they can genuinely express. This sets the foundation for everything that follows.</p>
          </div>
          <div className="method-card reveal reveal-delay-1">
            <div className="method-num">02</div>
            <h3>Build Confidence in Expression</h3>
            <p>Focus on full sentences, reinforce effort, refine accuracy. Through structured, personalized sessions, your child practices speaking about topics they already understand—building natural, confident communication.</p>
          </div>
          <div className="method-card reveal reveal-delay-2">
            <div className="method-num">03</div>
            <h3>Expand Beyond the Lesson</h3>
            <p>As confidence grows, we push further—introducing new topics, deeper discussions, and more sophisticated vocabulary. Your child doesn't just learn English; they start living in it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
