let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const timer = document.getElementById('timer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let countdown;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - n) * 100}%)`;
        slide.style.opacity = index === n ? 1 : 0;
    });
    currentSlide = n;
    resetTimer();
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

function resetTimer() {
    clearInterval(countdown);
    let seconds = 45;
    timer.textContent = seconds;
    countdown = setInterval(() => {
        seconds--;
        timer.textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
            nextSlide();
        }
    }, 1000);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(0);
