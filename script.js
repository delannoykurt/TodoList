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
            li.textContent = task;

            const suppressBtn = document.createElement("button");
            suppressBtn.textContent = "Supprimer";
            suppressBtn.onclick = function () {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            };

            li.appendChild(suppressBtn);
            taskList.appendChild(li);
        });
    }

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push(taskText); // Ajout à la liste
            saveTasks();
            renderTasks();
            taskInput.value = ""; // Réinitialisation du champ de saisie
        }
    });

    renderTasks(); // Afficher les tâches sauvegardées au chargement de la page
});
