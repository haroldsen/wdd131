let tasks = [];

function renderTasks(tasks) {
  const unorderedList = document.getElementById("todoList");
  let listItems = tasks.map(task => {
    return `<li ${task.completed ? 'class="strike"' : ""}>
              <p>${task.detail}</p>
              <div>
                <span data-function="delete">❎</span>
                <span data-function="complete">✅</span>
              </div>
            </li>`;
  })
  unorderedList.innerHTML = listItems.join("");
}

function newTask() {
  const inputElement = document.getElementById("todo");
  const inputValue = inputElement.value;
  tasks.push({detail: inputValue, completed: false});
  renderTasks(tasks);
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = Array.from(taskElement.parentElement.children).indexOf(taskElement);
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  const taskThatTriggered = event.target.closest("li");
  const valueOfTriggeredTask = event.target.getAttribute("data-function");

  console.log(valueOfTriggeredTask);
  console.log(taskThatTriggered);

  const parent = event.target.closest("li");
  if (valueOfTriggeredTask === "delete") {
    removeTask(taskThatTriggered);
  }
  if (valueOfTriggeredTask === "complete") {
    completeTask(taskThatTriggered);
  }

}

const submitButton = document.getElementById("submitTask");
submitButton.addEventListener("click", newTask);
const taskList = document.getElementById("todoList");
taskList.addEventListener("click", manageTasks);
