const allCheckbox = [...document.querySelectorAll('.interest__check')];

for (let checkbox of allCheckbox) {
	checkbox.addEventListener('click', checkboxChecked);
}

function checkboxChecked() {
	const statusCheckbox = this.checked;
	const checkboxParent = this.closest('.interest');
	const checkboxChild = checkboxParent.querySelectorAll('.interest__check');

	for (let checkbox of checkboxChild) {
		if (checkboxChild.length > 1) {
			checkbox.checked = statusCheckbox;
		}
	}
}