

import useReveal from '../hooks/useReveal'

export default function Footer({ onOpenContact }) {
  useReveal()

  return (
    <footer>
      <div className="container">
        <div className="footer-cols">
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">The Golden <span>Method</span></div>
            <p className="footer-slogan">Express your premium English.</p>
            <p className="footer-mission">High-end, expression-first English language coaching designed for ambitious learners.</p>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Quick Links</h5>
            <ul className="footer-col-links">
              <li><a href="#programs">Programs &amp; Pricing</a></li>
              <li><a href="#programs">1-on-1 Coaching</a></li>
              <li><a href="#programs">Group Workshops</a></li>
              <li><button type="button" className="footer-link-btn" onClick={onOpenContact}>Book an Assessment</button></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-it-works">Our Philosophy</a></li>
              <li><a href="#how-it-works">The Method</a></li>
              <li><button type="button" className="footer-link-btn" onClick={onOpenContact}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Contact &amp; Support</h5>
            <ul className="footer-col-links">
              <li><a href="mailto:hello@thegoldenmethod.com">hello@thegoldenmethod.com</a></li>
              <li className="footer-wechat">WeChat ID: <span>thegoldenmethod</span></li>
              <li className="footer-hours">Hours: Monday - Friday<br />9:00 AM - 6:00 PM CST</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-col-title">Legal</h5>
            <ul className="footer-col-links">
              <li><a href="#terms">Terms &amp; Conditions</a></li>
              <li><a href="#privacy">Privacy &amp; Media Policy</a></li>
              <li><a href="#refund">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom reveal">
          <span className="footer-copy">© 2026 The Golden Method. All rights reserved.</span>
          <span className="footer-copy footer-bottom-links">
            <a href="#terms">Terms of Use</a>
            <span className="footer-divider">|</span>
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-divider">|</span>
            <a href="#cookies">Cookie Settings</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
