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
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    
    // Open clicked item if it wasn't already open
    if (!isOpen) item.classList.add('open');
}

// Review filter functionality
function filterReviews(category) {
    // Update active tab
    document.querySelectorAll('.review-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter review cards
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

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
});

// Form submission handler
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    const originalText = btn.textContent;
    
    // Show success state
    btn.textContent = 'Request Sent ✓';
    btn.style.background = '#2d7a4f';
    btn.style.color = '#fff';
    btn.disabled = true;
    
    // Reset form after delay
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        e.target.reset();
    }, 3000);
}