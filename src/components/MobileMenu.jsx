export default function MobileMenu({ isOpen, onToggleMobile, onOpenContact }) {
  const handleContact = () => {
    onToggleMobile()
    onOpenContact()
  }
  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
      <a href="#how-it-works" onClick={onToggleMobile}>Method</a>
      <a href="#programs" onClick={onToggleMobile}>Programs</a>
      <a href="#about" onClick={onToggleMobile}>About</a>
      <a href="#reviews" onClick={onToggleMobile}>Results</a>
      <button type="button" onClick={handleContact}>Request a Trial</button>
    </div>
  )
}
