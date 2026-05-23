const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryThumbs = document.querySelectorAll('.thumb');
const galleryNext = document.getElementById('galleryNext');
let galleryIndex = 0;

function updateGallery(index) {
  gallerySlides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
  galleryThumbs.forEach((thumb, idx) => thumb.classList.toggle('active', idx === index));
}

galleryThumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    galleryIndex = index;
    updateGallery(galleryIndex);
  });
});

galleryNext.addEventListener('click', () => {
  galleryIndex = (galleryIndex + 1) % gallerySlides.length;
  updateGallery(galleryIndex);
});

const testimonials = [
  {
    text: 'A faca superou todas as expectativas. O peso, o equilíbrio e o acabamento fazem dela uma peça de coleção. Recomendo para quem busca algo realmente singular.',
    author: 'Carlos M. · Chef profissional'
  },
  {
    text: 'O atendimento personalizado e o resultado final foram impecáveis. Cada detalhe foi pensado para refletir minha história e estilo.',
    author: 'Gabriela F. · Colecionadora'
  },
  {
    text: 'Recebi minha faca em uma embalagem impecável e a qualidade é ainda mais impressionante ao vivo. Um trabalho de alto padrão.',
    author: 'Rafael S. · Empresário'
  }
];

let testimonialIndex = 0;
const testimonialCard = document.getElementById('testimonialCard');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');

function updateTestimonial(index) {
  const current = testimonials[index];
  testimonialCard.querySelector('blockquote').textContent = current.text;
  testimonialCard.querySelector('.testimonial-meta').textContent = current.author;
}

testimonialPrev.addEventListener('click', () => {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(testimonialIndex);
});

testimonialNext.addEventListener('click', () => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  updateTestimonial(testimonialIndex);
});

updateTestimonial(testimonialIndex);
