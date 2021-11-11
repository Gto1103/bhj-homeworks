const reveals = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

const windowScroll = () => {
	for (let reveal of reveals) {
		const revealTop = reveal.getBoundingClientRect().top;
		const revealBottom = reveal.getBoundingClientRect().bottom;
		if ((revealTop < viewportHeight && revealTop > 0) ||
			(revealBottom < viewportHeight && revealBottom > 0)) {
			reveal.classList.add("reveal_active");
			console.log('Видно!')
		}
		else {
			reveal.classList.remove("reveal_active");
			console.log('Скрыто!')
		}
	};
};

document.addEventListener('scroll', windowScroll);