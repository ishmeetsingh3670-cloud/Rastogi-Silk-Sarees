// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal, .info-card, .map-wrap, .enquiry-box, .reach-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ── WHATSAPP ENQUIRY BUILDER ──
const sendBtn = document.getElementById('sendEnquiry');

sendBtn.addEventListener('click', () => {
  const name     = document.getElementById('enquiryName').value.trim();
  const category = document.getElementById('enquiryCategory').value;
  const details  = document.getElementById('enquiryDetails').value.trim();

  // Build the message
  let message = 'Hello, Rastogi Silk & Saree!';
  if (name)     message += `\n\nMy name is ${name}.`;
  if (category) message += `\n\nI am interested in: ${category}.`;
  if (details)  message += `\n\nAdditional details: ${details}`;
  message += '\n\nKindly guide me further. Thank you!';

  // Encode and open WhatsApp
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/91XXXXXXXXXX?text=${encoded}`, '_blank');
});

// Press Enter in name field moves to category
document.getElementById('enquiryName').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('enquiryCategory').focus();
});
