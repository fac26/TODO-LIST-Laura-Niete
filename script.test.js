let userInput = document.getElementById("todo-input");
const addTask = document.getElementById("addTask-btn");

test("Submitting a new task adds it to the list", () => {
  userInput.value = "Example Task";
  addTask.click();
  userInput.value = "";
});
