

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
            <h3>We Find Out Where Your Child Is</h3>
            <p>In the first lesson, we see exactly what your child can and cannot say in English. No tests. Just a real conversation.</p>
          </div>
          <div className="method-card reveal reveal-delay-1">
            <div className="method-num">02</div>
            <h3>We Help Them Speak Clearly</h3>
            <p>Every lesson, your child practises speaking in full sentences about things they already understand. We correct them gently, not harshly.</p>
          </div>
          <div className="method-card reveal reveal-delay-2">
            <div className="method-num">03</div>
            <h3>They Keep Getting Better Outside Class</h3>
            <p>As your child grows, we introduce bigger topics and harder ideas. Their English improves - not just in lessons, but everywhere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
