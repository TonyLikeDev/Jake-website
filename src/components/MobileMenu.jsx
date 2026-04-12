export default function MobileMenu({ isOpen, onToggleMobile }) {
  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
      <a href="#how-it-works" onClick={onToggleMobile}>Method</a>
      <a href="#programs" onClick={onToggleMobile}>Programs</a>
      <a href="#about" onClick={onToggleMobile}>About</a>
      <a href="#reviews" onClick={onToggleMobile}>Results</a>
      <a href="#contact" onClick={onToggleMobile}>Request a Trial</a>
    </div>
  )
}
