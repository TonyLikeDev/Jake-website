import { useState, useCallback } from 'react'


import useReveal from '../hooks/useReveal'

export default function ContactForm() {
  useReveal()
 
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3000)
  }, [])

  return (
    <section className="enquiry-section" id="contact">
      <div className="container">
        <div className="enquiry-grid">
          <div className="enquiry-info reveal">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Let's find the right fit for your child.</h2>
            <p className="section-desc">Fill out the form and we'll get back to you within 24 hours to discuss your child's needs and schedule a trial lesson.</p>
            <div className="enquiry-benefits">
              <div className="enquiry-benefit">
                <span className="benefit-check">✓</span>
                <span>Free level assessment in your trial lesson</span>
              </div>
              <div className="enquiry-benefit">
                <span className="benefit-check">✓</span>
                <span>Personalized program recommendation</span>
              </div>
              <div className="enquiry-benefit">
                <span className="benefit-check">✓</span>
                <span>No obligation — we help you decide what's best</span>
              </div>
            </div>
          </div>
          <div className="enquiry-form-wrapper reveal reveal-delay-1">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Student Name</label>
                  <input type="text" placeholder="Enter student name" required />
                </div>
                <div className="form-group">
                  <label>Student Age</label>
                  <div className="select-wrapper">
                    <select required>
                      <option value="" disabled selected>Select age</option>
                      {[6,7,8,9,10,11,12,13,14,15,16,17,18].map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Current English Level</label>
                <div className="select-wrapper">
                  <select required>
                    <option value="" disabled selected>Select current level</option>
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
                    <select name="preferredTime">
                      <option value="" disabled selected>Select time</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Parent / Guardian Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Contact Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Number <span style={{ color: 'var(--text-light)', fontWeight: 300 }}>(optional)</span></label>
                  <input type="tel" placeholder="Phone / WeChat ID" />
                </div>
                <div className="form-group">
                  <label>Interested Program</label>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled selected>Select a program</option>
                      <option value="group">Group Classes</option>
                      <option value="consultant">1-on-1 Consultant</option>
                      <option value="jake">1-on-1 with Jake</option>
                      <option value="ielts">IELTS Specialist</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Student's English Experience <span style={{ color: 'var(--text-light)', fontWeight: 300 }}>(optional)</span></label>
                  <input type="text" placeholder="e.g., 2 years of school English" />
                </div>
                <div className="form-group">
                  <label>When Do You Want to Start? <span style={{ color: 'var(--text-light)', fontWeight: 300 }}>(optional)</span></label>
                  <div className="select-wrapper">
                    <select>
                      <option value="" disabled selected>Select timeframe</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2-weeks">Within 1-2 weeks</option>
                      <option value="1-month">Within a month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Any Extra Notes <span style={{ color: 'var(--text-light)', fontWeight: 300 }}>(optional)</span></label>
                <textarea placeholder="Tell us anything else about your child's needs..." rows="3"></textarea>
              </div>
              <button type="submit" className="form-submit" style={submitted ? { background: '#2d7a4f', color: '#fff' } : {}}>
                {submitted ? 'Request Sent ✓' : 'Request a Trial Lesson'}
              </button>
              <p className="form-note">We'll respond within 24 hours to schedule your trial assessment.</p>
              <p className="form-privacy">By submitting this form, you consent to us contacting you regarding your enquiry. We respect your privacy and will not share your information.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
