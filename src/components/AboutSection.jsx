

import useReveal from '../hooks/useReveal'

export default function AboutSection() {
  useReveal()
 
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/img/about.jpg" alt="Jake — Lead Consultant" loading="lazy" width="1200" height="800" />
          </div>
          <div className="about-content">
            <span className="section-label reveal">ABOUT</span>
            <h3 className="reveal reveal-delay-1">I help people <em className="gold-text">find their voice</em> in English.</h3>
            <p className="reveal reveal-delay-2">I've worked with people for 8+ years. My job is to unlock what's already there — not fill gaps. Most tutoring systems treat students like empty vessels waiting to be filled with vocabulary and grammar rules. We take a different approach.</p>
            <p className="reveal reveal-delay-3">People already have thoughts, opinions, and knowledge. They understand more than they think—they just haven't been given the right framework to express it clearly in English.</p>
            <p className="reveal reveal-delay-4">I recruit and train every consultant on our team. Every person gets the same high standard of guidance. Our goal is to help you build the confidence to think and speak naturally — not because you memorized, but because you understand.</p>
            <div className="about-stats reveal">
              <div>
                <span className="about-stat-num">8+ Years</span>
                <span className="about-stat-label">Consulting Experience</span>
              </div>
              <div>
                <span className="about-stat-num">1,000+</span>
                <span className="about-stat-label">Participants Guided</span>
              </div>
              <div>
                <span className="about-stat-num">7,000+</span>
                <span className="about-stat-label">Hours of Coaching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
