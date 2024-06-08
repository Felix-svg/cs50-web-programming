document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.querySelector("#task");
        const task = taskInput.value.trim();

        if (task !== "") {
            const taskList = document.querySelector("#tasks");
            const listItem = document.createElement("li");
            listItem.textContent = task;
            taskList.appendChild(listItem);
            taskInput.value = "";
        } else {
            console.log("Task cannot be empty");
        }
    });
});
