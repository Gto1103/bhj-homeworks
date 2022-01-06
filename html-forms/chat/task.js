const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

chatWidget.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');
});

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		inputMessage();
		outputMessage();
		input.value = '';
	};
});

function inputMessage() {
	const clientMessage = 'message message_client';
	if (input.value) {
		textMessages(input.value.trim(), clientMessage);
	} else return;
};

function outputMessage() {
	const randomMessage = [
		'Мы сейчас заняты!',
		'Не пишите сюда больше!',
		'Вы нам надоели!',
		'Нам нечего вам предложить.',
		'Что вы хотите от нас!',
		'Когда вы успокоитесь!',
		'Никого нет дома!'
	];
	const randomIndex = Math.floor(Math.random() * randomMessage.length);
	let message = randomMessage[randomIndex];
	if (!(input.value)) {
		textMessages('Добрый день, введите не пустое сообщение!', 'message');
	} else {
		textMessages(message, 'message');
	};
}

function textMessages(text, classMessage) {
	function dateNow() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		return hours + ':' + minutes;
	}

	messages.innerHTML += `
	<div class="${classMessage}">
	  <div class="message__time">${dateNow()}</div>
	  <div class="message__text">
		${text}
	  </div>
	</div>
 `;
}