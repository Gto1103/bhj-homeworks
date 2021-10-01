let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {

	getHole = (index) => document.getElementById(`hole${index}`);

	let hole = getHole(index);
	hole.onclick = function () {

		let deadNumber = Number(dead.textContent);
		let lostNumber = Number(lost.textContent);

		if (hole.className.includes('hole_has-mole') === true) {
			deadNumber += 1;
		} else {
			lostNumber += 1;
		}

		if (deadNumber === 10) {
			alert("Вы победили!");
			deadNumber = 0;
			lostNumber = 0;
		} else if (lostNumber === 5) {
			alert("Вы проиграли");
			deadNumber = 0;
			lostNumber = 0;
		}

		dead.textContent = deadNumber;
		lost.textContent = lostNumber;
	}
}