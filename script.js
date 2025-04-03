document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText);
                taskInput.value = "";
            }
        });

        function addTask(text) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = text;
            span.addEventListener("click", () => {
                span.classList.toggle("completed");
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Supprimer";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", () => {
                li.remove();
            });

            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        }
    });
});