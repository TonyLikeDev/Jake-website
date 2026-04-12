

import useReveal from '../hooks/useReveal'

export default function Footer() {
  useReveal()
 
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">The Golden <span>Method</span></div>
          <div className="footer-links">
            <a href="#how-it-works">Method</a>
            <a href="#programs">Programs</a>
            <a href="#about">About</a>
            <a href="#reviews">Results</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom reveal">
          <span className="footer-copy">© 2026 The Golden Method. All rights reserved.</span>
          <span className="footer-copy">Premium English Tutoring — Expression First</span>
        </div>
      </div>
    </footer>
  )
}
