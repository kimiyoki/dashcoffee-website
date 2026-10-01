const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');
const feedbackTextarea = document.getElementById('feedbackText');
const charCount = document.getElementById('charCount');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    menuCards.forEach((card) => {
      const category = card.dataset.category;
      const showCard = selectedFilter === 'all' || category === selectedFilter;
      card.classList.toggle('hidden', !showCard);
    });
  });
});

if (feedbackTextarea && charCount) {
  const updateCounter = () => {
    const currentLength = feedbackTextarea.value.length;
    charCount.textContent = `${currentLength} / 500 characters`;
  };

  feedbackTextarea.addEventListener('input', updateCounter);
  updateCounter();
}

const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = feedbackTextarea.value.trim();

    if (!text) {
      alert('Please share a short thought before submitting.');
      feedbackTextarea.focus();
      return;
    }

    alert('Thank you for your feedback!');
    feedbackForm.reset();
    charCount.textContent = '0 / 500 characters';
  });
}
