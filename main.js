let addTask = document.querySelector(".add-task");
let taskInput = document.querySelector(".text");
let plus = document.querySelector(".plus");
let noTaskMsg = document.querySelector(".no-tasks-message");
let taskList = document.querySelector(".tasks-content");
let toggleCheckbox = document.querySelector("#toggle_checkbox");
let body = document.querySelector("body");
let tasksCount = [];
let tasksCompleted = [];

toggleCheckbox.onclick = function () {
  if (getComputedStyle(body).backgroundColor == "rgba(135, 143, 229, 0.5)") {
    body.style.backgroundColor = "#181818";
    document.querySelector(".add-task").style.backgroundColor = "#282828";
    document.querySelector(".tasks-content").style.backgroundColor = "#282828";
    document.querySelector(".task-stats").style.backgroundColor = "#282828";
    document.querySelector(".task-stats").style.color = "white";
    document.querySelector(".no-tasks-message").style.color = "white";
  } else {
    body.style.backgroundColor = "rgba(135, 143, 229, 0.5)";
    document.querySelector(".add-task").style.backgroundColor = "#878fe5";
    document.querySelector(".tasks-content").style.backgroundColor = "#878fe5";
    document.querySelector(".task-stats").style.backgroundColor = "#878fe5";
  }
};

plus.addEventListener("click", addTasks);
document.addEventListener("keyup", addTasks);

function addTasks(event) {
  if (event.code === "Enter" || event.target.tagName == "SPAN") {
    if (taskInput.value.length >= 1) {
      event.preventDefault();
      let taskText = taskInput.value;
      let taskHTML = `<div class="card">
    <ul id="tasks-content">
             <li class="list-group-item">
            <span class="task-title">${taskText}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btnDone">
                    <img src="./img/tick.svg" alt="Done" width="18" height="18">
                </button>
                <button type="button" data-action="delete" class="btnDelete">
                    <img src="./img/cross.svg" alt="Done" width="18" height="18">
                </button>
            </div>
        </li>
    </ul>
</div>`;
      taskList.insertAdjacentHTML("beforeend", taskHTML);
      taskInput.value = "";
      taskInput.focus();
      tasksCount.push("1");
      let count = document.querySelector(".count");
      count.innerHTML = tasksCount.length;
      if (taskList.children.length > 1) {
        noTaskMsg.classList.add("none");
      }
    } else {
      taskInput.focus();
    }
  }
}

taskList.addEventListener("click", deleteTask);

taskList.addEventListener("click", doneTask);

function deleteTask(event) {
  if (event.target.dataset.action == "delete") {
    let parentNode = event.target.closest(".card");
    parentNode.remove();
    tasksCount.pop("1");
    let count = document.querySelector(".count");
    count.innerHTML = tasksCount.length;
    tasksCompleted.pop("1");
    let completed = document.querySelector(".completed");
    completed.innerHTML = tasksCompleted.length;
  }

  if (taskList.children.length === 1) {
    noTaskMsg.classList.remove("none");
  }
}

function doneTask(event) {
  if (event.target.dataset.action === "done") {
    let parentNode = event.target.closest(".list-group-item");
    let taskTitle = parentNode.querySelector(".task-title");
    if (
      getComputedStyle(taskTitle).textDecoration ==
      "line-through solid rgb(255, 255, 255)"
    ) {
      taskTitle.style = "text-decoration:none";
      tasksCompleted.pop("1");
      let completed = document.querySelector(".completed");
      completed.innerHTML = tasksCompleted.length;
    } else {
      taskTitle.style = "text-decoration:line-through";
      let completed = document.querySelector(".completed");
      tasksCompleted.push("1");
      completed.innerHTML = tasksCompleted.length;
    }
  }
}
