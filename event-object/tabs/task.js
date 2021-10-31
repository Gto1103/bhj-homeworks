const tabsArr = [...document.getElementsByClassName('tab')];
const contentsArr = [...document.getElementsByClassName('tab__content')];

function clickTab() {
	for (let tab of tabsArr) {
		if (tab.classList.contains('tab_active')) {
			tab.classList.remove('tab_active');
			contentsArr[tabsArr.indexOf(tab)].classList.remove('tab__content_active');
		}
	};
	this.classList.add('tab_active');
	contentsArr[tabsArr.indexOf(this)].classList.add('tab__content_active');
}

for (let tab of tabsArr) {
	tab.addEventListener('click', clickTab);
}