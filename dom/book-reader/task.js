const fontSizeArr = [...document.querySelectorAll('.font-size')];
const book = document.querySelector('.book');

function changeFontSize(e) {
	e.preventDefault();

	for (let item of fontSizeArr) {
		if (item.classList.contains('font-size_active')) {
			item.classList.remove('font-size_active');
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		};
	};

	if (this.classList.contains('font-size_small')) {
		this.classList.add('font-size_active');
		book.classList.add('book_fs-small');
	} else if (this.classList.contains('font-size_big')) {
		this.classList.add('font-size_active');
		book.classList.add('book_fs-big');
	};
};

fontSizeArr.forEach((item) => {
	item.addEventListener('click', changeFontSize);
});
