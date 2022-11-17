//Selectors
const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("addtaskbtn");
const taskList = document.getElementById("tasklist");
const filterOption = document.querySelector(".filter-todo");
const form = document.getElementById("form");
const error = document.getElementById("errorMsg");

//Event listeners
document.addEventListener("DOMContentLoaded", getTasks);
taskBtn.addEventListener("click", validateTask);
taskList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// ADD TASK
function validateTask(event) {
  event.preventDefault(); //Prevents page from refreshing when button is clicked

  if (taskInput.value.length == 0) {
    displayError();
    taskInput.focus();
    error.classList.remove("hidden");
  } else if (taskInput.value.length > 30) {
    errMsgMaxChar();
    taskInput.value = "";
    taskInput.focus();
    error.classList.remove("hidden");
  } else if (!isNaN(taskInput.value)) {
    errMsgNumInput();
    taskInput.focus();
    error.classList.remove("hidden");
  } else {
    return addTask();
  }
}

function addTask() {
  //Dynamically creating a new div for tasks and buttons to sit inside. This is what will be displayed when the button is clicked
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  //Create list items
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;
  newTask.classList.add("task-item");
  taskDiv.appendChild(newTask);

  //Add task to Local Storage
  saveLocalTasks(taskInput.value);
  //Check Mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  taskDiv.appendChild(completedButton);

  //Delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  taskDiv.appendChild(trashButton);

  //Append to UL
  taskList.appendChild(taskDiv);

  //Clear Input value
  taskInput.value = "";
}

//Display error message
function displayError() {
  error.textContent = "Please enter a task!";
  setTimeout(() => {
    error.textContent = "";
  }, 2000);
}

function errMsgMaxChar() {
  error.textContent = "Please keep your task name under 30 characters.";
  setTimeout(() => {
    error.textContent = "";
  }, 2000);
}

function errMsgNumInput() {
  error.textContent = "Tasks should have some text, not just numbers.";
  setTimeout(() => {
    error.textContent = "";
  }, 2000);
}

//Filter function
function filterTodo(e) {
  const todos = taskList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none ";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none ";
        }
        break;
    }
  });
}

function deleteCheck(e) {
  const item = e.target;

  //Delete task
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);
    todo.remove();
  }

  //Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function saveLocalTasks(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTasks() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    //Create list items
    const newTask = document.createElement("li");
    newTask.innerText = todo;
    newTask.classList.add("task-item");
    taskDiv.appendChild(newTask);

    //Check Mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    taskDiv.appendChild(completedButton);

    //Delete button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    taskDiv.appendChild(trashButton);
    trashButton.addEventListener("click", () => {
      taskDiv.remove();
    });

    //Append to UL
    taskList.appendChild(taskDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
