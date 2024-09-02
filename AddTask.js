// function to add a task
function addTask(taskObj , taskID) {
    // create div for the task title
    let infoDiv = document.createElement("div");
    infoDiv.style.width = "70%";
    infoDiv.id = "task_info"

    // create heading for the task title
    let taskTitle = document.createElement("h2");
    taskTitle.id = "task_title"
    taskTitle.textContent = taskObj.title;
    console.log(taskTitle.textContent);
    infoDiv.appendChild(taskTitle);

    // create div for the span which will contain the date and the calendar icon
    let spanDiv = document.createElement("div");

    // create the calendar icon span
    let calendar_month = document.createElement("span");
    calendar_month.classList.add("material-symbols-outlined");
    calendar_month.textContent = "calendar_month";
    spanDiv.appendChild(calendar_month);

    // create the date span
    let date_span = document.createElement("span");
    let currentDate = taskObj.date
    date_span.textContent = currentDate;
    spanDiv.appendChild(date_span);

    // append the spanDiv to the infoDiv
    infoDiv.appendChild(spanDiv);

    // create the main div that will hold the task info
    let task_div = document.createElement("div");
    task_div.classList.add("task")

    task_div.appendChild(infoDiv);

    // create a div which will contain the edit, check, and delete buttons
    let buttons_div = document.createElement("div");
    buttons_div.classList.add("action");

    // create the buttons and add them to the buttons_div
    addButton(buttons_div, "delete", "rgb(96, 13, 17)", taskID);
    addButton(buttons_div, "check", "rgb(35, 182, 32)", taskID);
    addButton(buttons_div, "edit", "rgb(20, 144, 193)", taskID);

    // append the button div to the task div
    task_div.appendChild(buttons_div);
    task_div.className = "task"
    //append the task_div to the tasks container
    tasksContainer.appendChild(task_div);
    
    
}

