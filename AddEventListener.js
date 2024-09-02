//open modal when the (add task) button is clicked
submitTaskButton.addEventListener("mouseover" , function(){
    if (taskInput.value == ""){
        //if it was moved to the left last time move it to right and update the var leftOrRright
        if (leftOrRright == 1){
            submitTaskButton.style.transform = "translateX(100px)";
            submitTaskButton.style.transition = "transform 0.5s ease-in-out";
            leftOrRright = 0;
        }            
        //else if it was moved to the right last time move it to left and update the var leftOrRright
        else {
            submitTaskButton.style.transform = "translateX(-100px)";
            submitTaskButton.style.transition = "transform 0.5s ease-in-out";
            leftOrRright = 1;
        }

    }
})
// when the mouse is not hover the button return it to the middle
submitTaskButton.addEventListener("mouseout", function() {
    submitTaskButton.style.transform = "translateX(0)";
    submitTaskButton.style.transition = "transform 0.5s ease-in-out";
});


//make the modal visibile
openModalButton.addEventListener ("click" ,  function() {
    modal.style.display = "block";
    taskInput.focus();
})

// close modal when the x is clicked
closeSpan.addEventListener ("click" ,  function()  {
    taskInput.value = ""
    modal.style.display = "none";
})

// close modal when clicking outside of it
window.addEventListener ("click" ,  function()  {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

// handle task submission
submitTaskButton.addEventListener ("click" ,  function()  {
    // remove spaces around the text
    var taskTitle = taskInput.value.trim();
    
    let taskObj = {
        "title" : taskTitle,
        "date" : getDate(),
        "isDone" : false 
    }
    tasks.push(taskObj);
    
    refreshTable();
    submitTaskButton.style.backgroundColor = "red"

    taskInput.value = ""; 
    modal.style.display = "none"; // close the modal
})


taskInput.addEventListener("input", function() {
    if (taskInput.value === "") {
        submitTaskButton.style.backgroundColor = "red";
    } else {
        submitTaskButton.style.backgroundColor = "green";
    }
});