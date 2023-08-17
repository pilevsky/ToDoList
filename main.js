let addTask = document.querySelector(".add-task");
let taskInput = document.querySelector(".text");
let plus = document.querySelector(".plus");
let noTaskMsg = document.querySelector(".no-tasks-message");
let taskList = document.querySelector(".tasks-content");

let arr = [];

// arr.push("1");
  


  
plus.addEventListener("click", function (event) {
  event.preventDefault();
  let taskText = taskInput.value;
  let taskHTML = `<div class="card">
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
  arr.push("1");
  let count = document.querySelector(".count");
  //  count.innerHTML = taskList.children.length + 1;
  count.innerHTML = arr.length;
  if (taskList.children.length > 1) {
    noTaskMsg.classList.add("none");
  }
});

taskList.addEventListener("click", deleteTask);

taskList.addEventListener("click", doneTask);

function deleteTask(event) {
  if (event.target.dataset.action == "delete") { //удаляет первое задание!
    document.querySelector(".card").remove();
    console.log(taskList.children.length);
      arr.pop("1");
    let count = document.querySelector(".count");
    count.innerHTML = arr.length;
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
      "line-through solid rgb(0, 0, 0)"
    ) {
      taskTitle.style = "text-decoration:none";
    } else {
      taskTitle.style = "text-decoration:line-through";
    }
  }
}


