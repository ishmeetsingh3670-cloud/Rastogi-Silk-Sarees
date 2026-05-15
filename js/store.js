// ── CATEGORY TAB FILTERING ──
const tabs = document.querySelectorAll('.cat-tab');
const blocks = document.querySelectorAll('.cat-block');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const cat = tab.dataset.cat;

    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show/hide category blocks
    blocks.forEach(block => {
      if (cat === 'all') {
        block.classList.remove('hidden');
      } else {
        const blockId = block.id.replace('block-', '');
        if (blockId === cat) {
          block.classList.remove('hidden');
        } else {
          block.classList.add('hidden');
        }
      }
    });

    // Scroll to top of store section smoothly
    document.querySelector('.store-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── SCROLL REVEAL FOR PRODUCT CARDS ──
const cards = document.querySelectorAll('.product-card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (entry.target.dataset.delay || 0));
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach((card, i) => {
  card.dataset.delay = (i % 4) * 80;
  cardObserver.observe(card);
});

// ── SCROLL TO CATEGORY FROM URL HASH ──
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }
});
