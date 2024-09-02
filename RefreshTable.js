function refreshTable(){
    tasksContainer.innerHTML = ""
    let taskID = 0
    for (task of tasks){
        addTask(task , taskID);
        taskID++;
    }
}