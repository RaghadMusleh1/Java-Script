function addButton(buttons_div, name, rgb, taskID) {
    let button_type = document.createElement("button");
    button_type.style.backgroundColor = rgb;
    let button_span = document.createElement("span");
    button_span.classList.add("material-symbols-outlined");
    button_span.textContent = name;
    button_type.appendChild(button_span);
    buttons_div.appendChild(button_type);
    if (name == "delete"){
        button_type.onclick = function() {
            deleteTask(taskID);
        };
    }
    else if (name == "edit"){
        button_type.onclick = function() {
            editTask(taskID);
        };
    }
    else {
        button_type.onclick = function() {
            isDoneTask(taskID , this, button_span);
        };
    }

}