const mainDropDowms = document.getElementsByClassName("dropdown");

for (let mainDropDowm of mainDropDowms) {

	const dropDowmValue = mainDropDowm.querySelector(".dropdown__value");
	const dropDownList = mainDropDowm.querySelector(".dropdown__list");
	const dropDownItems = mainDropDowm.getElementsByTagName("li");

	function dropDown() {
		dropDownList.classList.add("dropdown__list_active");
	}

	dropDowmValue.addEventListener('click', dropDown);

	for (let item of dropDownItems) {
		const link = item.querySelector(".dropdown__link");

		function changeValue(e) {
			e.preventDefault();
			dropDownList.classList.remove("dropdown__list_active");
			dropDowmValue.textContent = link.textContent;
		}

		link.addEventListener('click', changeValue)
	}
}