// Get the task input and task list elements
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Get the form element
const taskForm = document.getElementById('task-form');

// Add a new task to the list
function addTask(e) {
  // Prevent form from submitting
  e.preventDefault();

  // Get the task input value
  const task = taskInput.value;

  // Create a new list item element
  const li = document.createElement('li');

  // Set the text content of the list item to the task input value
  li.textContent = task;

  // Create a delete button for the list item
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  // Append the delete button to the list item
  li.appendChild(deleteBtn);
  
  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the task input value
  taskInput.value = '';
}

// Add event listener to the form to add a new task when submitted
taskForm.addEventListener('submit', addTask);

// Function to remove a task from the list
function removeTask(e) {
  if (e.target.className === 'delete-btn') {
    const li = e.target.parentElement;
    taskList.removeChild(li);
  }
}

// Add event listener to the task list to remove a task when the delete button is clicked
taskList.addEventListener('click', removeTask);
