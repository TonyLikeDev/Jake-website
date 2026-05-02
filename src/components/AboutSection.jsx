

import useReveal from '../hooks/useReveal'

export default function AboutSection() {
  useReveal()

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/img/about.jpg" alt="Jake - Lead Coach" loading="lazy" width="1200" height="800" />
          </div>
          <div className="about-content">
            <span className="section-label reveal">ABOUT</span>
            <h3 className="reveal reveal-delay-1">I help learners <em className="gold-text">express</em> what they already understand in English.</h3>
            <p className="reveal reveal-delay-2">Simple ideas. Clear English. Real results.</p>
            <p className="reveal reveal-delay-3">Many people study for years, but still cannot speak clearly.
              Not because they don’t know, but because they cannot express.</p>
            <p className="reveal reveal-delay-4">We focus on thinking, speaking, and confidence.</p>
            <div className="about-stats reveal">
              <div>
                <span className="about-stat-num">8+ Years</span>
                <span className="about-stat-label">Coaching Experience</span>
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

        <div className="philosophy-block reveal">
          <span className="section-label">OUR PHILOSOPHY</span>
          <h3 className="philosophy-heading">More than a language. <em className="gold-text">A tool for life.</em></h3>
          <div className="philosophy-grid">
            <div className="philosophy-item reveal">
              <h4>Accompanying Growth</h4>
              <p>English is not just a subject to be memorized - it is a tool for life. We focus on building each learner's confidence, critical thinking, and willingness to express themselves. Coaching goes beyond grammar to help learners feel relaxed, engaged, and supported.</p>
            </div>
            <div className="philosophy-item reveal reveal-delay-1">
              <h4>A Truly International Perspective</h4>
              <p>Based in a vibrant, international environment, our coaching brings real-world cultural context into the digital classroom. We serve families looking for more than just language acquisition - we provide an expansive, global lens that helps learners connect with the world.</p>
            </div>
            <div className="philosophy-item reveal reveal-delay-2">
              <h4>KET / PET &amp; IELTS Preparation</h4>
              <p>Our expression-first methodology naturally lays the groundwork for high-level English exams. We integrate targeted speaking and writing skills aligned with KET, PET, and IELTS standards. As students progress, exam-specific elements are introduced seamlessly into 1-on-1 and group coaching - preparing learners for academic and international paths without unnecessary stress.</p>
            </div>
            <div className="philosophy-item reveal reveal-delay-3">
              <h4>Communication &amp; Progress Reporting</h4>
              <p>To ensure high-quality tracking and respect everyone's time, parents receive structured, periodic progress feedback from the Coach at fixed intervals during each package. Clear, meaningful communication about real growth - not noise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
