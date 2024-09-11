document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);

    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();
        } else {
            e.target.classList.toggle("completed");
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = "";
    }
});
