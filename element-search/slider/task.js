const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = document.querySelectorAll(".slider__item");

let sliderItem = [...sliderItems];
let sliderLength = sliderItem.length;
let slide = 0;

arrowPrev.onclick = () => {
	slide -= 1;
	console.log(slide);
	showSlides(slide);
};

arrowNext.onclick = () => {
	slide += 1;
	console.log(slide);
	showSlides(slide);
}

function showSlides(n) {

	if (n > sliderLength) {
		slide = 1;
	} else if (n < 1) {
		slide = sliderLength;
	}

	for (let i = 0; i < sliderItem.length; i++) {
		sliderItem[i].classList.remove("slider__item_active");
	};
	sliderItems[slide - 1].classList.toggle("slider__item_active");
}