const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");

window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskText => {
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
    });
};

function createTaskElement(taskText) {
    const task = document.createElement("div");
    task.classList.add("task");

    const taskTextElement = document.createElement("p");
    taskTextElement.classList.add("task-text");
    taskTextElement.textContent = taskText;

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add("task-checkbox");

    taskCheckbox.addEventListener("change", () => {
        taskTextElement.style.textDecoration = taskCheckbox.checked ? "line-through" : "none";
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-task");
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

    deleteButton.addEventListener("click", () => {
        task.remove();
        updateLocalStorage();
    });


    const editButton = document.createElement("button");
    editButton.classList.add("edit-task");
    editButton.innerHTML = '<i class="fa fa-edit"></i>';

    const modal = document.getElementById("editModal");
    const editInput = document.getElementById("editInput");
    const saveButton = document.getElementById("saveButton");
    const closeButton = document.getElementsByClassName("close")[0];

    editButton.addEventListener("click", () => {
      modal.style.display = "block";

      editInput.value = taskTextElement.textContent;
    });

    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    saveButton.addEventListener("click", () => {
      const newTaskText = editInput.value;
      if (newTaskText) {
        taskTextElement.textContent = newTaskText;
        updateLocalStorage();
        modal.style.display = "none"; 
      }
    });
    
    
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const newTaskText = editInput.value;
        if (newTaskText) {
          taskTextElement.textContent = newTaskText;
          updateLocalStorage();
          modal.style.display = "none";
        }
      }
    });



    task.appendChild(taskTextElement);
    task.appendChild(taskCheckbox);
    task.appendChild(editButton); 
    task.appendChild(deleteButton);

    return task;
}

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    
    updateLocalStorage();
    taskInput.value = "";
});

taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});

function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll(".task-text").forEach(taskTextElement => {
        tasks.push(taskTextElement.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}