
const mainMenus = document.getElementsByClassName("menu_main");

for (let mainMenu of mainMenus) {

	const subMenus = mainMenu.getElementsByClassName("menu_sub");

	for (let subMenu of subMenus) {

		const link = subMenu.closest(".menu__item").querySelector(".menu__link");

		console.log(link);

		link.onclick = () => {
			if (subMenu.classList.contains("menu_active")) {
				subMenu.classList.remove("menu_active");
				return false;
			}

			const activeMenuItem = mainMenu.querySelector(".menu_active");
			if (activeMenuItem) {
				activeMenuItem.classList.remove("menu_active");
			}
			subMenu.classList.add("menu_active");
			return false;
		};
	}
}