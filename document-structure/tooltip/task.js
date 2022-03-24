const allTooltips = [...document.querySelectorAll('.has-tooltip')];
let lastElement = false;

//Создание всех подсказок

for (let tooltip of allTooltips) {
	let tooltipElem = document.createElement('div');
	tooltipElem.textContent = tooltip.title;
	tooltipElem.className = 'tooltip';
	tooltip.insertAdjacentElement('afterEnd', tooltipElem);
	tooltipElem.style.left = tooltip.getBoundingClientRect().left + 'px';
	tooltipElem.style.top = tooltip.getBoundingClientRect().top + 20 + 'px';
}

//Обработчик события - активация подсказок

document.addEventListener('click', function (event) {
	let element = event.target;

	if (element.className == 'has-tooltip') {
		event.preventDefault();

		if (!lastElement) {
			lastElement = element.nextElementSibling;
			element.nextElementSibling.classList.add('tooltip_active');
			return;
		}

		if (lastElement !== element.nextElementSibling) {
			lastElement.classList.remove('tooltip_active');
			lastElement = element.nextElementSibling;
			element.nextElementSibling.classList.add('tooltip_active');
			return;
		}

		if (lastElement == element.nextElementSibling) {
			lastElement.classList.remove('tooltip_active');
			lastElement = false;
		}
	}
})