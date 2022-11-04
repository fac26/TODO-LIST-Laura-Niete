const form = document.getElementById("form");
const input = document.getElementById("task-input");
const taskTodo = document.getElementById("tasklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function addTask(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
}
