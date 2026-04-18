

import useReveal from '../hooks/useReveal'

export default function TrustBar() {
  useReveal()
 
  return (
    <div className="trust-bar" id="trust">
      <div className="container">
        <div className="trust-items">
          <div className="trust-item reveal">
            <strong>NO COMMITMENT</strong>
            Clear level assessment in first session
          </div>
          <div className="trust-item reveal reveal-delay-1">
            <strong>EXPRESSION FIRST</strong>
            Focus on communication, not memorization
          </div>
          <div className="trust-item reveal reveal-delay-2">
            <strong>INDIVIDUAL FOCUS</strong>
            Individual focus, even in groups
          </div>
          <div className="trust-item reveal reveal-delay-3">
            <strong>10+ YEARS</strong>
            Years experience for each consultant
          </div>
        </div>
      </div>
    </div>
  )
}
