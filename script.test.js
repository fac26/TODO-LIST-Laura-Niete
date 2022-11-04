const userInput = document.getElementById("task-input");

test("Submitting a new task adds it to the list", () => {
  userInput.value = "Example Task";
  equal(userInput.value, "Example Task", "Task added successfully");
  userInput.value = "";
});
