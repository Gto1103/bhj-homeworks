const reveals = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

const windowScroll = () => {
	for (let reveal of reveals) {
		const { top, bottom } = reveal.getBoundingClientRect();
		if ((top < viewportHeight && top > 0) ||
			(bottom < viewportHeight && bottom > 0)) {
			reveal.classList.add("reveal_active");
		}
		else {
			reveal.classList.remove("reveal_active");
		}
	};
};

document.addEventListener('scroll', windowScroll);