

import useReveal from '../hooks/useReveal'

export default function TrustBar() {
  useReveal()
 
  return (
    <div className="trust-bar" id="trust">
      <div className="container">
        <div className="trust-items">
          <div className="trust-item reveal">
            <strong>No Commitment</strong>
            Clear level assessment in first lesson
          </div>
          <div className="trust-item reveal reveal-delay-1">
            <strong>Expression First</strong>
            Focus on communication, not memorization
          </div>
          <div className="trust-item reveal reveal-delay-2">
            <strong>Individual Focus</strong>
            Individual focus, always
          </div>
          <div className="trust-item reveal reveal-delay-3">
            <strong>20+ Years</strong>
            Combined team experience
          </div>
        </div>
      </div>
    </div>
  )
}
