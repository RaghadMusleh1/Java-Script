function editTask(taskId) {
    const taskDivs = tasksContainer.querySelectorAll('div.task');
    const childDivsArray = Array.from(taskDivs);

    let to_edit_div = childDivsArray[taskId];
    
    
    // select the elment h2
    let taskTitleElement = to_edit_div.querySelector("#task_title");
    
    let prev_name = taskTitleElement.textContent

    if (taskTitleElement) {
        let task_title_input = document.createElement("input");
        task_title_input.value = taskTitleElement.textContent;

        // replace the text by input field
        taskTitleElement.parentNode.replaceChild(task_title_input, taskTitleElement);

        
        //when the input field lose the focus  
        task_title_input.addEventListener("blur", function() {
            let confirmMessage = confirm("do you want to edit the name of the task "+ prev_name +" to " + task_title_input.value)
            if (confirmMessage){
                taskTitleElement.textContent = task_title_input.value;
                task_title_input.parentNode.replaceChild(taskTitleElement, task_title_input);
                tasks[taskId].title = task_title_input.value; 
            } 
        });
    }
}


function deleteTask(taskId){
    console.log(taskId)
    let confirmMessage = confirm("Do you want to delete the task " + (tasks[taskId].title) + '?' )
    if (confirmMessage){
        tasks.splice(taskId, 1);
        refreshTable();
    }

}



function isDoneTask(taskId , btn, name){
    let taskDivs = tasksContainer.querySelectorAll("div.task");

    const taskDivsArray = Array.from(taskDivs);
    taskDivsArray[taskId].style.backgroundColor = "rgb(144, 238, 144)";
    btn.style.backgroundColor = "red"
    name.textContent = "delete"

}