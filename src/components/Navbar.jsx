import { useEffect, useState } from 'react'

export default function Navbar({ onToggleMobile }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">The Golden <span>Method</span></a>
        <ul className="nav-links">
          <li><a href="#how-it-works">Method</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Results</a></li>
          <li><a href="#contact" className="nav-cta">Request a Trial</a></li>
        </ul>
        <button className="mobile-toggle" onClick={onToggleMobile} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
