import { useEffect, useRef } from 'react'

export default function useReveal() {
  const observerRef = useRef(null)

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observerRef.current.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px 200px 0px' }
      )
    }

    const observer = observerRef.current

    // Check all .reveal elements on every render
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible')
      } else {
        observer.observe(el)
      }
    })
  })

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])
}
