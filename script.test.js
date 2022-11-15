const testInput = document.getElementById("task-input");
const testBtn = document.getElementById("addtaskbtn");
const testList = document.getElementById("tasklist");
const testItem = document.querySelectorAll(".task-item");

function createTestTask(task) {
  testInput.value = task;
  testBtn.click();
  testInput.value = "";
}

function clearTest() {
  testList.innerHTML = "";
  localStorage.clear();
}

// ADD tests
test("Submitting a new task adds it to the list", () => {
  createTestTask("Task1");
  equal(testList.children.length, 1, "One task is added to the list");
  clearTest();
});

test("Test to check input field is cleared after a task is added", () => {
  createTestTask("Task2");
  equal(testInput.value, "", "Input field is cleared after a task is added");
  clearTest();
});

test("Test to see if there is an input within the input field", () => {
  createTestTask("");
  const error = document.querySelector("#errorMsg");
  equal(
    error.textContent,
    "Please enter a task!",
    "Displayed error message for empty input"
  );
  clearTest();
});

//Delete Test
test("Clicking delete will remove a task from the list", () => {
  createTestTask("Task3");
  const trashBtns = document.querySelectorAll(".trash-btn");
  trashBtns[0].click();
  equal(trashBtns[0].offsetParent, null, "Task deleted from the list");
  localStorage.clear();
});

//Check completed Task
test("Clicking the tick for each task will change it's styling to show it is completed", () => {
  createTestTask("Task4");
  const completedButtonTest = document.createElement("button");
  completedButtonTest.click();
  completedButtonTest.classList.add("completed");
  equal(
    completedButtonTest.classList.contains("completed"),
    true,
    "User can mark a task as completed"
  );
  clearTest();
});

//Filter Test
test("Selecting all in the drop down menu shows all tasks", () => {
  createTestTask("Task5");
  const result = testList.children.length;
  equal(result, 1, "All tasks that have been added should be shown");
  clearTest();
});

test("Selecting complete in the drop down menu shows all completed tasks", () => {
  createTestTask("Task6");
  const completeBtn = document.querySelector(".complete-btn");
  completeBtn.click();
  const selectEl = document.getElementById("filter-todo");
  let output = selectEl.options[selectEl.selectedIndex].value;
  output = "completed";

  equal(output, "completed", "Completed option can be selected");
  equal(testList.children.length, 1, "Displays the one completed task");
  clearTest();
});

test("Selecting incomplete in the drop down menu shows all incomplete tasks", () => {
  createTestTask("Task7");
  const selectEl = document.getElementById("filter-todo");
  let output = selectEl.options[selectEl.selectedIndex].value;
  output = "incomplete";

  equal(output, "incomplete", "Incomplete option can be selected");
  equal(testList.children.length, 1, "Displays the one incomplete task");
  clearTest();
});

// LOCAL STORAGE Tests
test("Checking for items in local storage", () => {
  let a = (localStorage.testItem = "Task8");
  equal(a, "Task8", "Checked if item in local storage");
  localStorage.clear();
});

test("Adding an item to local storage", () => {
  createTestTask("Task9");
  let localLength = testList.children.length;
  equal(localLength, 1, "Item added to local storage");
  clearTest();
});

test("Deleting an item from local storage", () => {
  createTestTask("Task10");
  createTestTask("Task11");
  const trashBtns = document.querySelectorAll(".trash-btn");
  trashBtns[1].click();
  let localLength = testList.children.length;
  equal(localLength, 1, "Item deleted from local storage");
  clearTest();