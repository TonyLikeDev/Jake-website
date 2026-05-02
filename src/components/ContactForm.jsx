import { useState, useCallback, useEffect } from 'react'

export default function ContactForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3000)
  }, [])

  if (!isOpen) return null

  return (
    <div className="contact-modal open" onClick={onClose}>
      <button className="contact-modal-close" onClick={onClose} aria-label="Close">&times;</button>
      <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="enquiry-info">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Start With an Assessment</h2>
          <p className="section-desc">This first session helps us understand your level, identify strengths, and recommend the right path forward.</p>
          <div className="enquiry-benefits">
            <div className="enquiry-benefit">
              <span className="benefit-check">✓</span>
              <span>Free level assessment in your trial session</span>
            </div>
            <div className="enquiry-benefit">
              <span className="benefit-check">✓</span>
              <span>Personalized program recommendation</span>
            </div>
            <div className="enquiry-benefit">
              <span className="benefit-check">✓</span>
              <span>No obligation - we help you decide what's best</span>
            </div>
          </div>
          <p className="enquiry-key-line">This isn't a sample. It's a structured starting point.</p>
        </div>
        <div className="enquiry-form-wrapper">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter name" required />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="text" placeholder="e.g., 12 or 34" required />
              </div>
            </div>
            <div className="form-group">
              <label>Current English Level</label>
              <div className="select-wrapper">
                <select required defaultValue="">
                  <option value="" disabled>Select current level</option>
                  <option value="beginner">Beginner</option>
                  <option value="elementary">Elementary</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="upper-intermediate">Upper-Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Main Goal</label>
              <div className="checkbox-group">
                {['confidence','academic','ielts','conversation','other'].map(g => (
                  <label key={g} className="checkbox-item">
                    <input type="checkbox" name="goal" value={g} /> {g.charAt(0).toUpperCase() + g.slice(1)}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Available Days</label>
                <div className="day-checkboxes">
                  {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(d => (
                    <label key={d} className="day-checkbox-item">
                      <input type="checkbox" name="day" value={d} />
                      <span>{d.slice(0,3)}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <div className="select-wrapper">
                  <select name="preferredTime" defaultValue="">
                    <option value="" disabled>Select time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Contact Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Contact Number <span className="field-optional">(optional)</span></label>
                <input type="tel" placeholder="Phone / WeChat ID" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Interested Program</label>
                <div className="select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>Select a program</option>
                    <option value="group">Group Sessions</option>
                    <option value="coaching">1-on-1 Coaching</option>
                    <option value="jake">1-on-1 Intensive</option>
                    <option value="ielts">IELTS Specialist</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>When Do You Want to Start? <span className="field-optional">(optional)</span></label>
                <div className="select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>Select timeframe</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2-weeks">Within 1-2 weeks</option>
                    <option value="1-month">Within a month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Previous English Experience <span className="field-optional">(optional)</span></label>
              <input type="text" placeholder="e.g., 2 years of English coaching" />
            </div>
            <div className="form-group">
              <label>Any Extra Notes <span className="field-optional">(optional)</span></label>
              <textarea placeholder="Tell us anything else about your needs..." rows="3"></textarea>
            </div>
            <button type="submit" className="form-submit" style={submitted ? { background: '#2d7a4f', color: '#fff' } : {}}>
              {submitted ? 'Enquiry Sent ✓' : 'SUBMIT ENQUIRY'}
            </button>
            <p className="form-note">We'll respond within 24 hours to schedule your trial assessment.</p>
            <p className="form-privacy">By submitting this form, you consent to us contacting you regarding your enquiry. We respect your privacy and will not share your information.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
