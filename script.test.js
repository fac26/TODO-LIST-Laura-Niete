const testInput = document.getElementById("task-input");
const testBtn = document.getElementById("addtaskbtn");
const testList = document.getElementById("tasklist");

function createTestTask(task) {
  testInput.value = task;
  testBtn.click();
  testInput.value = "";
}

// ADD tests

test("Submitting a new task adds it to the list", () => {
  createTestTask("Task1");
  equal(testList.children.length, 1, "One task is added to the list");
  testList.innerHTML = "";
});

test("Test to check input field is cleared after a task is added", () => {
  createTestTask("Task1");
  equal(testInput.value, "", "Input field is cleared after a task is added");
  testList.innerHTML = "";
});

test("Test to see if there is an input within the input field", () => {
  createTestTask("");
  const error = document.querySelector("#errorMsg");
  equal(
    error.textContent,
    "Please enter a task!",
    "Displayed error message for empty input"
  );
  testList.innerHTML = "";
});
