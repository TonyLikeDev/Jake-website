

import useReveal from '../hooks/useReveal'

export default function AboutSection() {
  useReveal()
 
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="public/img/about.jpg" alt="The Golden Method Tutor" loading="lazy" width="1200" height="800" />
          </div>
          <div className="about-content">
            <span className="section-label reveal">About</span>
            <h3 className="reveal reveal-delay-1">We help students <em className="gold-text">find their voice</em> in English.</h3>
            <p className="reveal reveal-delay-2">Most tutoring systems treat students like empty vessels waiting to be filled with vocabulary and grammar rules. We take a different approach.</p>
            <p className="reveal reveal-delay-3">Your child already has thoughts, opinions, stories, and knowledge. They understand more than they think—they just haven't been given the right framework to express it in English.</p>
            <p className="reveal reveal-delay-4">Our job isn't to fill gaps. It's to unlock what's already there. Through patient, personalized sessions, we help students build the confidence to think and speak naturally in English—not because they memorized, but because they understand.</p>
            <p className="reveal reveal-delay-4">Our team includes dedicated IELTS and TOEFL specialists, so whatever your child's goal, we have the expertise to guide them.</p>
            <div className="about-stats reveal">
              <div>
                <span className="about-stat-num">20+</span>
                <span className="about-stat-label">Years Combined Experience</span>
              </div>
              <div>
                <span className="about-stat-num">200+</span>
                <span className="about-stat-label">Students Guided</span>
              </div>
              <div>
                <span className="about-stat-num">Specialists</span>
                <span className="about-stat-label">IELTS/TOEFL Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
