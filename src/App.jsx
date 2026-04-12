import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import MethodSection from './components/MethodSection'
import ProgramsSection from './components/ProgramsSection'
import ProgramModal from './components/ProgramModal'
import ApproachSection from './components/ApproachSection'
import AboutSection from './components/AboutSection'
import ReviewsSection from './components/ReviewsSection'
import VideoModal from './components/VideoModal'
import TrialCTA from './components/TrialCTA'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programModal, setProgramModal] = useState(null)
  const [videoModal, setVideoModal] = useState(null)

  const toggleMobile = useCallback(() => setMobileOpen(p => !p), [])
  const openProgram = useCallback((key) => setProgramModal(key), [])
  const closeProgram = useCallback(() => setProgramModal(null), [])
  const openVideo = useCallback((text) => setVideoModal(text), [])
  const closeVideo = useCallback(() => setVideoModal(null), [])

  return (
    <>
      <Navbar onToggleMobile={toggleMobile} />
      <MobileMenu isOpen={mobileOpen} onToggleMobile={toggleMobile} />
      <Hero />
      <TrustBar />
      <MethodSection />
      <ProgramsSection onOpenProgram={openProgram} />
      <ProgramModal programKey={programModal} onClose={closeProgram} />
      <ApproachSection />
      <AboutSection />
      <ReviewsSection onOpenVideo={openVideo} />
      <VideoModal text={videoModal} onClose={closeVideo} />
      <TrialCTA />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  )
}
