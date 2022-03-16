const products = document.querySelector('.products');
const cart = document.querySelector('.cart__products');

products.addEventListener('click', (e) => {
	const product = e.target;
	console.log(products);
	if (product.classList.contains('product__quantity-control_dec')) {
		decProduct(product);
	}
	if (product.classList.contains('product__quantity-control_inc')) {
		incProduct(product);
	}
	if (product.classList.contains('product__add')) {
		addProduct(product);
	}
});

function decProduct(product) {
	let value = product.closest('.product__quantity-controls').querySelector('.product__quantity-value');
	if (value.textContent <= 1) {
		return
	} else {
		value.textContent = +value.textContent - 1;
	}
}

function incProduct(product) {
	let value = product.closest('.product__quantity-controls').querySelector('.product__quantity-value');
	value.textContent = +value.textContent + 1;
}

function addProduct(product) {
	const id = +product.closest('.product').dataset.id;
	const source = product.closest('.product').querySelector('.product__image').getAttribute('src');
	let amount = +product.closest('.product__quantity').querySelector('.product__quantity-value').textContent;

	const productCart =
		`
    	<div class="cart__product" data-id="${id}">
      	<img class="cart__product-image" src="${source}">
     		<div class="cart__product-count">${amount}</div>
   	</div>
 	`;

	let findProduct = [...cart.querySelectorAll('.cart__product')].find((newProduct) => +newProduct.dataset.id === id);
	if (findProduct) {
		let counterCart = findProduct.querySelector('.cart__product-count');
		counterCart.textContent = +counterCart.textContent + amount;
		return;
	}

	cart.insertAdjacentHTML('beforeend', productCart);
}