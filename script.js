// script.js

//Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called
// TODO: Call the render function to update the table with the new tasks.


// script.js
// Section 2: App State Variables
let tasks = [];

// script.js
// Section 3: Cached Element References
const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');

//Function to handle form submission
function handleSubmission(event){
    event.preventDefault();

    //TODO: Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    //TODO Validate input fields
    if (taskName === '' || taskDeadline === '') {
        alert('Please fill out both the task name and deadline fields!');
        return;
    }

    //TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });

    render();
}

//Function to render tasks in the table 
function render(){
    //TODO Use array methods to create a new table row of data for each item in the array
        // TODO: Use array methods to create a new table row of data for each item in the array
        taskTable.innerHTML = tasks.map(task => `
            <tr>
                <td>${task.name}</td>
                <td>${task.description}</td>
                <td>${task.deadline}</td>
                <td><button onclick="markTaskComplete(this)">Complete</button></td>
                <td><button onclick="removeTask(this)">Remove</button></td>
            </tr>
        `).join('');
    }

//Function to initialize the table
function init(){
    taskTable.innerHTML = ''; //Clear the table
    tasks = []; //Reset the tasks array
    render(); //Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();

//Function to complete task
function markTaskComplete(index) {
    tasks.splice(index, 1);
    render();
    alert('Yay!')
}

// Function to remove a task
function removeTask(index){
    tasks.splice(index, 1);
    render();
}
