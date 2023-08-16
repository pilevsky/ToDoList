let addTask = document.querySelector(".add-task");
let taskInput = document.querySelector(".text");
let plus = document.querySelector(".plus");
let noTaskMsg = document.querySelector(".no-tasks-message");
let taskList = document.querySelector(".tasks-content");

plus.addEventListener("click", function (event) {
  event.preventDefault();
  let taskText = taskInput.value;
  let taskHTML = `<div class="card mb-4">
    <ul id="tasks-content" class="list-group list-group-flush">
             <li class="list-group-item d-flex justify-content-between task-item">
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
  if (taskList.children.length > 1) {
    noTaskMsg.classList.add("none");
  }
});

taskList.addEventListener("click", deleteTask);

taskList.addEventListener("click", doneTask);

function deleteTask(event) {
  if (event.target.dataset.action == "delete") {
    const parenNode = event.target.closest(".list-group-item");
    parenNode.remove();
    console.log(taskList.children.length);
  }
 
  if (taskList.children.length === 1) {
    noTaskMsg.classList.remove("none");
  }
}

function doneTask(event) {
  if (event.target.dataset.action === "done") {
  }
}
