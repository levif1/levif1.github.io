const track = document.querySelector('.carouselTrack');
const slide = Array.from(track.children);
const nextButton = document.querySelector('.rightButton');
const prevButton = document.querySelector('.leftButton');
const dotsNav = document.querySelector('.carouselNav');
const dots = Array.from(dotsNav.children);
const slideWidth = slide[0].getBoundingClientRect().width;

//arrange the slides next to one another

const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
};

slide.forEach(setSlidePosition);

// moving slides

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	+')';
	currentSlide.classList.remove('currentSlide');
	currentSlide.classList.add('hidden');
	currentSlide.classList.remove('visible');
	targetSlide.classList.add('currentSlide');
	targetSlide.classList.add('visible');
	targetSlide.classList.remove('hidden');
};

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('currentNav');
	targetDot.classList.add('currentNav');
};

// when I click left, move slide to the left

prevButton.addEventListener('click', (e) => {
	const currentSlide = track.querySelector('.currentSlide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentDot = dotsNav.querySelector('.currentNav');
	const prevDot = currentDot.previousElementSibling;

	moveToSlide(track, currentSlide, prevSlide);
	updateDots(currentDot, prevDot);
});

// when I click right, move slide to the right

nextButton.addEventListener('click', (e) => {
	const currentSlide = track.querySelector('.currentSlide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = dotsNav.querySelector('.currentNav');
	const nextDot = currentDot.nextElementSibling;

	moveToSlide(track, currentSlide, nextSlide);
	updateDots(currentDot, nextDot);
});

//when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', (e) => {
	const targetDot = e.target.closest('button');

	if (!targetDot) return;

	const currentSlide = track.querySelector('.currentSlide');
	const currentDot = dotsNav.querySelector('.currentNav');
	const targetIndex = dots.findIndex((dot) => dot === targetDot);
	const targetSlide = slide[targetIndex];

	moveToSlide(track, currentSlide, targetSlide);

	updateDots(currentDot, targetDot);
});
