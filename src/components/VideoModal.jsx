import { useEffect } from 'react'

export default function VideoModal({ text, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (text) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [text, onClose])

  if (!text) return null

  return (
    <div className="video-modal open" onClick={onClose}>
      <button className="video-modal-close" onClick={onClose}>&times;</button>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{text}</p>
      </div>
    </div>
  )
}
