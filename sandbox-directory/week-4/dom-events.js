let tasks = [];

function renderTasks(tasks) {
    // get the list element from the DOM
    
    // Retrieve the HTML element that will be used by the list
    const listElement = document.getElementById("todoList");

    // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
    
    // Iterate over the array and create <li> elements
    tasks.forEach(taskObject => {
        // Create new li element
        let listItem = document.createElement("li");

        // Set text of li
        listItem.textContent = "$Detail: {taskObject.detail}, Completed: ${taskObject.completed}"; 

        // Apend li to ul
        listElement.appendChild(listItem);
    })
    

}

function newTask() {
    // get the value entered into the #todo input
    const task = document.getElementById("todo").value;

    // add it to our arrays tasks
    // Supposed task object format: { detail: task, completed: false}
    let taskObject = {
        detail: task,
        completed: false// IDK what to put here right now, so for now I'll copy the format
    }
    // Append taskObject to tasks array
    tasks.push(taskObject)

    // render out the list
    renderTasks(taskObject);
}

function removeTask(taskElement) {
    // Note the use of Array.filter to remove the element from our task array
    // Notice also how we are using taskElement instead of document as our starting point?
    // This will restrict our search to the element instead of searching the whole document.
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector("p").innerText
    );

    // this line removes the HTML element from the DOM
    taskElement.remove();
}

function completeTask(taskElement) {
    // In this case we need to find the index of the task so we can modift it.
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.childNodes[0].innerText
    );
    // once we have the index we can modify the complete field.
    // tasks[taskIndex].completed ? false : true is a ternary expression.
    // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    // toggle adds a class if it is not there, removes it if it is.
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(event) {
    // did they click the delete or complete icon?
    console.log(event.target);
    console.log(event.currentTarget);
    // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

    // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
}

// Add your event listeners here
const button = document.getElementById("submitTask")
button.addEventListener("click", newTask())

// We need to attatch listeners to the submit button and the list. Listen for a click, call the "newTask" function on submit and call the "manageTasks" function if either of the icons are clicked in the list of tasks.