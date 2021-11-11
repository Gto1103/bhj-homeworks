const rotatorCases = document.querySelectorAll(".rotator__case");
const rotatorArr = [...rotatorCases];
let index = 0;

const nextRotation = () => {
	if (index === rotatorArr.length - 1) {
		rotatorArr[index].classList.remove("rotator__case_active");
		index = 0;
		rotatorArr[index].classList.add("rotator__case_active");
	} else {
		rotatorArr[index].classList.remove("rotator__case_active");
		index++;
		rotatorArr[index].classList.add("rotator__case_active");
	}
}

setInterval(nextRotation, 1000);