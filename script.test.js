const testInput = document.getElementById("task-input");
const testBtn = document.getElementById("addtaskbtn");
const testList = document.getElementById("tasklist");
const deleteBtn = document.querySelector(".trash-btn");
const completeButton = document.querySelector(".complete-btn");

function createTestTask(task) {
  testInput.value = task;
  testBtn.click();
  testInput.value = "";
}

// ADD tests

test("Submitting a new task adds it to the list", () => {
  createTestTask("Task1");
  equal(testList.children.length, 1, "One task is added to the list");
});

test("Test to check input field is cleared after a task is added", () => {
  createTestTask("Task1");
  equal(testInput.value, "", "Input field is cleared after a task is added");
});

test("Test to see if there is an input within the input field", () => {
  createTestTask("");
  const error = document.querySelector("#errorMsg");
  equal(
    error.textContent,
    "Please enter a task",
    "Displayed error message for empty input"
  );
});

// Check Delete //
//--------------//
test("Clicking delete will remove a task from the list", () => {
  createTestTask("Task1");
  const trashBtns = document.querySelectorAll(".trash-btn");
  trashBtns[0].click();

  equal(trashBtns[0].offsetParent, null,"Task deleted from the list");
});
  


// Check completed //
//--------------//
  // Imiatating a user clicking the checkbox
  test("Checking an entry marks it as complete", () => {
    createTestTask("Task1");
    

    const checkbox = document.getElementsByClassName("complete-btn");

    //Imitate the user clicking the box
    checkbox[0].click();

    equal(checkbox[0].checked, true,"Checkbox is checked when clicked");

    checkbox[0].click();
  });



