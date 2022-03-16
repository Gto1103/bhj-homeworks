const allTooltips = [...document.querySelectorAll('.has-tooltip')];

for (let tooltip of allTooltips) {
	tooltip.addEventListener('click', showTooltip);
}

function showTooltip() {
	if (document.querySelector('.tooltip') != null) {
		document.querySelector('.tooltip').remove('tooltip_active');
		return event.preventDefault();
	}

	let tooltipElem = document.createElement('div');
	tooltipElem.textContent = this.title;
	tooltipElem.className = 'tooltip tooltip_active';
	this.insertAdjacentElement('afterEnd', tooltipElem);
	tooltipElem.style.left = this.getBoundingClientRect().left + 'px';

	event.preventDefault();
}