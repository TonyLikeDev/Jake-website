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

// Select arrow animation + placeholder color
document.querySelectorAll('.enquiry-form .select-wrapper select').forEach(sel => {
    // Set initial state
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

// Day circle toggle for availability
document.querySelectorAll('.day-circle').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selected');
        // Update hidden input with selected days
        const selected = [...document.querySelectorAll('.day-circle.selected')].map(b => b.dataset.day);
        document.getElementById('availabilityInput').value = selected.join(', ');
    });
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
