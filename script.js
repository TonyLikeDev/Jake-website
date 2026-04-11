// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMobile() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// FAQ accordion toggle
function toggleFaq(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// Review filter functionality
function filterReviews(category) {
    document.querySelectorAll('.review-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.review-card').forEach(card => {
        if (category === 'all' || card.dataset.category.includes(category)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Video modal functionality
function openVideoModal(text) {
    document.getElementById('videoModalText').textContent = text;
    document.getElementById('videoModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    document.getElementById('videoModal').classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideoModal();
        closeProgramModal();
    }
});

// Program modal functionality
const programData = {
    group: {
        badge: 'Group Program',
        title: 'Group Classes',
        desc: 'Small-group sessions (max 4 students) focused on conversation, comprehension, and confidence-building. A great introduction before committing to 1-on-1. Most students continue after assessment.',
        features: [
            { title: 'Small Groups, Maximum Impact', text: 'Maximum 4 students per session ensures each student gets speaking time while benefiting from peer interaction. Groups are carefully matched by level and age.' },
            { title: 'Conversation-First Learning', text: 'Sessions built around real topics—science, culture, current events—not textbooks. Students practice expressing ideas they already understand, building fluency naturally.' },
            { title: 'Assessment Included', text: 'Every student starts with a level assessment during their trial. We group students at the right level and track progress throughout the program.' },
            { title: 'Pathway to 1-on-1', text: 'Most students transition to 1-on-1 sessions after assessment and initial group experience. The group format is an excellent starting point.' }
        ]
    },
    consultant: {
        badge: 'Most Popular',
        title: '1-on-1 Consultant',
        desc: 'Fully personalized 1-on-1 sessions tailored to your child\'s pace, interests, and goals. The core of the Golden Method—expression-first learning with real-time feedback.',
        features: [
            { title: 'Personalized Curriculum', text: 'Sessions designed around what your child already cares about. When the topic is interesting, the English flows naturally. No generic textbooks.' },
            { title: 'Real-Time Feedback', text: 'Every word your child speaks gets immediate, gentle correction. They learn to self-correct through guided conversation, building accuracy without sacrificing confidence.' },
            { title: 'Flexible Pacing', text: 'We adapt to your child\'s rhythm—no rushing, no holding back. Some students need more time on foundations; others are ready for advanced discussion quickly.' },
            { title: 'Regular Progress Reports', text: 'Parents receive consistent updates on their child\'s development—areas of improvement, current focus, and practical suggestions for practice at home.' }
        ]
    },
    jake: {
        badge: 'Limited Availability',
        title: '1-on-1 with Jake',
        desc: 'Premium tier with Jake as your dedicated tutor. Extended session time, priority scheduling, and the most intensive personalization available.',
        features: [
            { title: 'Extended Session Time', text: 'Sessions with Jake run longer—allowing deeper exploration of topics, more speaking practice, and more thorough feedback. Every minute is maximized.' },
            { title: 'Priority Scheduling', text: 'Premium students get first access to Jake\'s calendar. Sessions scheduled around your family\'s availability, not ours.' },
            { title: 'Maximum Personalization', text: 'Jake draws on years of experience to read your child\'s needs in real-time—adjusting pace, topics, and difficulty on the fly.' },
            { title: 'Weekly Progress Tracking', text: 'The most detailed reporting available. Weekly updates cover every area of improvement, current focus, and specific suggestions for home practice.' }
        ]
    },
    ielts: {
        badge: 'Specialist Program',
        title: 'IELTS Specialist',
        desc: 'Score-focused preparation for IELTS Academic and General Training. Covers all four skills—Listening, Reading, Writing, Speaking—with exam strategies, timed practice, and mock assessments.',
        features: [
            { title: 'All Four Skills Covered', text: 'Listening, Reading, Writing, Speaking—we develop all four systematically. We build a balanced profile so no single skill holds the overall score back.' },
            { title: 'Exam Strategies & Timed Practice', text: 'We teach exam-specific strategies—time management, question analysis, response structuring—so your child performs at their best under pressure.' },
            { title: 'Mock Assessments', text: 'Regular mock tests simulate real exam conditions. Your child becomes comfortable with the format, timing, and expectations before the actual test day.' },
            { title: 'Dedicated IELTS Specialists', text: 'Our team includes tutors who specialize exclusively in IELTS preparation. They know the scoring rubrics, common pitfalls, and where students gain the most points.' }
        ]
    }
};

function openProgramModal(program) {
    const data = programData[program];
    document.getElementById('programModalBadge').textContent = data.badge;
    document.getElementById('programModalTitle').textContent = data.title;
    document.getElementById('programModalDesc').textContent = data.desc;

    const featuresEl = document.getElementById('programModalFeatures');
    featuresEl.innerHTML = data.features.map(f =>
        `<div class="program-modal-feature"><h4>${f.title}</h4><p>${f.text}</p></div>`
    ).join('');

    document.getElementById('programModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProgramModal() {
    document.getElementById('programModal').classList.remove('open');
    document.body.style.overflow = '';
}

// Select arrow animation + placeholder color
document.querySelectorAll('.enquiry-form .select-wrapper select').forEach(sel => {
    if (!sel.value) sel.classList.add('placeholder-shown');
    else sel.classList.remove('placeholder-shown');

    sel.addEventListener('focus', () => {
        sel.parentElement.classList.add('open');
    });
    sel.addEventListener('change', () => {
        sel.classList.toggle('placeholder-shown', !sel.value);
    });
});

// Close select wrappers when clicking outside
document.addEventListener('click', (e) => {
    document.querySelectorAll('.enquiry-form .select-wrapper.open').forEach(wrapper => {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove('open');
            const sel = wrapper.querySelector('select');
            if (sel) sel.blur();
        }
    });
});

// Day checkbox availability update
function updateAvailability() {
    const selected = [...document.querySelectorAll('input[name="day"]:checked')].map(cb => cb.value);
    document.getElementById('availabilityInput').value = selected.join(', ');
}

// Form submission handler
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Request Sent ✓';
    btn.style.background = '#2d7a4f';
    btn.style.color = '#fff';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        e.target.reset();
        document.querySelectorAll('.enquiry-form select').forEach(s => s.classList.add('placeholder-shown'));
    }, 3000);
}
