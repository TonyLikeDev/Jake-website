import { useEffect, useState } from 'react'

export default function Navbar({ onToggleMobile, onToggleLang, lang, onOpenContact }) {
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
          <li>
            <button className="nav-lang-toggle" onClick={onToggleLang}>
              <span className={`lang-text ${lang === 'zh' ? 'active' : ''}`}>中</span>
              <span className={`lang-thumb ${lang === 'zh' ? 'left' : 'right'}`}></span>
              <span className={`lang-text ${lang === 'en' ? 'active' : ''}`}>EN</span>
            </button>
          </li>
          <li><a href="#how-it-works">Method</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Results</a></li>
          <li><button type="button" className="nav-cta" onClick={onOpenContact}>Request a Trial</button></li>
        </ul>
        <button className="mobile-toggle" onClick={onToggleMobile} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
