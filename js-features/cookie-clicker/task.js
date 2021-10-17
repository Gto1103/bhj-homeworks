const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const speedCounter = document.getElementById("speed__counter");

cookie.onclick = function () {
	let counter = +(clickerCounter.textContent);
	counter += 1;
	clickerCounter.textContent = counter;
	setTimeout((() => cookie.width = 200), 100);
	cookie.width = 300;
}