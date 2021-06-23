let prev = document.getElementById('btn-prev'),
	next = document.getElementById('btn-next'),
	slides = document.querySelectorAll('.slider-img'),
	dots = document.querySelectorAll('.dot'),
    slidersContent = document.querySelectorAll('.slider-content');

let index = 0;

const activeSlide = n => {
	for(slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n => {
	for(dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const activeSliderContent = n => {
	for(sliderContent of slidersContent) {
        sliderContent.classList.remove('active');
	}
	slidersContent[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
	activeSlide(index);
	activeDot(index);
    activeSliderContent(index);
}

const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

setInterval(nextSlide, 3000);

const prevSlide = () => {
	if(index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

dots.forEach((item, indexDot)=> {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);