document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            const taskText = document.createElement("span");
            taskText.textContent = task;
            li.appendChild(taskText);

            // Bouton Modifier
            const editBtn = document.createElement("button");
            editBtn.classList.add('edit-btn');
            editBtn.textContent = "Modifier";
            editBtn.onclick = function () {
                editTask(index, li, taskText);
            };

            // Bouton Supprimer
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = "Supprimer";
            deleteBtn.onclick = function () {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            };

            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    function editTask(index, li, taskText) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = tasks[index];

        const saveBtn = document.createElement("button");
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = "Sauvegarder";
        saveBtn.onclick = function () {
            tasks[index] = input.value.trim();
            saveTasks();
            renderTasks();
        };

        // Remplacement du texte par le champ d'édition
        li.innerHTML = "";
        li.appendChild(input);
        li.appendChild(saveBtn);
    }

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push(taskText);
            saveTasks();
            renderTasks();
            taskInput.value = "";
        }
    });

    renderTasks();
});
