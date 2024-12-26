let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    currentSlide = index;
}

function changeSlide(direction) {
    const newIndex = (currentSlide + direction + slides.length) % slides.length;
    showSlide(newIndex);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initial display
showSlide(currentSlide);