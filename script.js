const gallerySlides = document.querySelectorAll('.gallery-slide');

let galleryIndex = 0;

function updateGallery(index) {
  gallerySlides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
}

function nextSlide() {
  galleryIndex++;

  if (galleryIndex >= gallerySlides.length) {
    galleryIndex = 0;
  }

  updateGallery(galleryIndex);
}

// inicia primeiro slide
updateGallery(galleryIndex);

// autoplay
setInterval(nextSlide, 5000);