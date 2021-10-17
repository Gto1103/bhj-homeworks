const timer = document.getElementById("timer");

function removeTime() {
	let time = +(timer.textContent);
	if (time === 0) {
		alert('«Вы победили в конкурсе!»');
		time = 59;
	}
	time -= 1;
	timer.textContent = time;
}

setTimeout(setInterval(removeTime, 1000), 59000);
clearTimeout();