import { useState } from 'react'


const reviews = [
  { id: 1, category: '1on1', text: '"My son went from being terrified to speak English to raising his hand in class within 4 months. The change wasn\'t overnight—it was steady, and that\'s what made it real. He actually looks forward to his sessions."', avatar: 'L', name: 'Lin', meta: 'Mother of Leo, age 8 · 6 months in' },
  { id: 2, category: '1on1', text: '"What impressed me most is that my daughter now argues with me in English. She\'s not translating anymore—she\'s thinking in it. That\'s the difference between this and every other tutoring we tried."', avatar: 'C', name: 'Chen', meta: 'Father of Sophie, age 12 · 1 year in' },
  { id: 3, category: '1on1', text: '"Other tutors gave him worksheets. Here, they discuss real topics—science, culture, current events. His English improved, but so did his confidence and critical thinking. Worth every penny."', avatar: 'W', name: 'Wang', meta: 'Mother of Daniel, age 11 · 8 months in' },
  { id: 4, category: 'group', text: '"I was skeptical at first because my daughter refused to speak English at home after other tutors. Here, she started singing English songs to herself. The pressure-free environment made all the difference."', avatar: 'Z', name: 'Zhang', meta: 'Mother of Mia, age 7 · 3 months in' },
  { id: 5, category: '1on1', text: '"My son participated in an English debate competition last month. He didn\'t win, but he spoke for 3 minutes without hesitation. A year ago, he couldn\'t say two sentences. The progress speaks for itself."', avatar: 'H', name: 'Huang', meta: 'Father of Ryan, age 13 · 10 months in' },
  { id: 6, category: '1on1', text: '"The monthly reports are what sold me. I always know exactly what we\'re working on, where he\'s improving, and what to practice at home. It\'s professional, intentional, and transparent."', avatar: 'Y', name: 'Yang', meta: 'Mother of Ethan, age 9 · 5 months in' }
]

const videoTestimonials = [
  { id: 1, img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=225&fit=crop', name: 'Lin', meta: 'Mother of Leo, age 8', text: 'Video: Lin shares how her son overcame his fear of speaking English' },
  { id: 2, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=225&fit=crop', name: 'Chen', meta: 'Father of Sophie, age 12', text: 'Video: Chen discusses her daughter thinking in English' },
  { id: 3, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=225&fit=crop', name: 'Huang', meta: 'Father of Ryan, age 13', text: 'Video: Huang shares his son debate competition journey' }
]

import useReveal from '../hooks/useReveal'

export default function ReviewsSection({ onOpenVideo }) {
  useReveal()
 
  const [filter, setFilter] = useState('all')

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'group', label: 'Group Classes' },
    { key: '1on1', label: '1-on-1' },
    { key: 'ielts', label: 'IELTS' }
  ]

  const filtered = reviews.filter(rv => filter === 'all' || rv.category.includes(filter))

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reveal">
          <span className="section-label">What Parents Say</span>
          <h2 className="section-title">Real feedback from real families.</h2>
          <p className="section-desc">No cherry-picked one-liners. Real feedback from families who've committed to the process.</p>
        </div>

        <div className="reviews-tabs reveal">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`review-tab${filter === tab.key ? ' active' : ''}`}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="reviews-grid">
          {filtered.map((rv, i) => (
            <div className={`review-card reveal${i ? ` reveal-delay-${i}` : ''}`} key={rv.id}>
              <div className="review-stars">★ ★ ★ ★ ★</div>
              <p className="review-text">{rv.text}</p>
              <div className="review-author">
                <div className="review-avatar">{rv.avatar}</div>
                <div>
                  <div className="review-name">{rv.name}</div>
                  <div className="review-meta">{rv.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64 }}>
          <h3 className="section-title reveal" style={{ fontSize: '1.6rem' }}>Hear from parents directly</h3>
          <p className="section-desc reveal" style={{ marginBottom: 32 }}>Short video testimonials from families who've seen the transformation.</p>
          <div className="review-video-cards">
            {videoTestimonials.map((v, i) => (
              <div key={v.id} className={`review-video-card reveal${i ? ` reveal-delay-${i}` : ''}`} onClick={() => onOpenVideo(v.text)}>
                <img src={v.img} alt="Video testimonial" onError={(e) => e.target.style.display = 'none'} />
                <div className="review-video-play"></div>
                <div className="review-video-label">
                  <strong>{v.name}</strong>
                  {v.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
