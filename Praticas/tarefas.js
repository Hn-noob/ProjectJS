function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var taskText = document.createElement("span");
        taskText.innerText = taskInput.value;
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Remover";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);

        taskInput.value = "";
    }
}