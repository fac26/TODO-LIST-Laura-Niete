//Selectors
const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("addtaskbtn");
const taskList = document.getElementById("tasklist");
const form = document.getElementById("form");

//Event listeners
taskBtn.addEventListener("click", addTask);

taskInput.focus();

// ADD TASK
function addTask(event) {
  event.preventDefault(); //Prevents page from refreshing when button is clicked

  if (taskInput.value.trim().length === 0) {
    return displayError();
  } else {
    //Dynamically creating a new div for tasks and buttons to sit inside. This is what will be displayed when the button is clicked
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    //Create list items
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
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

    //Append to UL
    taskList.appendChild(taskDiv);

    //Clear Input value
    taskInput.value = "";
  }

  function displayError() {
    const error = document.getElementById("errorMsg");
    error.textContent = "Please enter a task!";
    setTimeout(() => {
      error.textContent = "";
    }, 2000);
  }
}
