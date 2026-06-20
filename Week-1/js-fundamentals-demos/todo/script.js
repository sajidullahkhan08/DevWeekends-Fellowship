let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const listContainer = document.getElementById("task-list");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  listContainer.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = task.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
      tasks = tasks.filter(function (t) {
        return t.id !== task.id;
      });
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    listContainer.appendChild(li);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskName = input.value.trim();

  if (taskName !== "") {
    tasks.push({
      id: Date.now(),
      name: taskName,
    });

    saveTasks();
    renderTasks();
    input.value = "";
  }
});

renderTasks();
