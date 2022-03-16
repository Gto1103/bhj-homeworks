const taskForm = document.getElementById('tasks__form');

taskForm.addEventListener('submit', addNewTask);

function addNewTask() {
	event.preventDefault();

	let taskInput = document.getElementById('task__input');
	let taskList = document.getElementById('tasks__list');
	let task = `<div class="task">
						<div class="task__title">
							${taskInput.value}
						</div>
						<a href="#" class="task__remove">&times;</a>
					</div>`;

	if (taskInput.value.trim() != '') {
		taskList.insertAdjacentHTML('beforeend', task);
		let taskRemove = taskList.querySelectorAll('.task__remove');
		taskRemove[taskRemove.length - 1].addEventListener('click', removeTask);

		function removeTask() {
			this.parentElement.remove();
		}
	}
	taskInput.value = '';
}