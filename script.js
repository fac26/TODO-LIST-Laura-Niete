//Selectors
const taskInput = document.getElementById("task-input");
const taskBtn = document.getElementById("addtaskbtn");
const taskList = document.getElementById("tasklist");

//Event listeners
taskBtn.addEventListener("click", addTask);


//number of items in list so far
let count = 0;

// ADD TASK
function addTask(event) {
  event.preventDefault(); //Prevents page from refreshing when button is clicked
  count += 1;

  //Dynamically creating a new div for tasks and buttons to sit inside. This is what will be displayed when the button is clicked
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  //Create list items
  const newTask = document.createElement("label");
  newTask.innerText = taskInput.value;
  newTask.classList.add("task-item");
  newTask.setAttribute("for", `box-${count}`);
  taskDiv.appendChild(newTask);

  //Check Mark button
  const completeButton = document.createElement("INPUT");
  completeButton.setAttribute("type", "checkbox");
  completeButton.classList.add("complete-btn");
  completeButton.id = `box-${count}`
  taskDiv.insertBefore(completeButton, newTask)

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

  //Clear Input value
  taskInput.value = "";
}

