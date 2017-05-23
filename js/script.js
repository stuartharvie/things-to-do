var addTaskButton = document.getElementById("add-task-button");

// When user clicks add task button, call newTask function
addTaskButton.addEventListener('click', function(event) {
  newTask();
});

function newTask() {
  // Assign variables
  var item = document.getElementById('add-task-input').value;
  var ul = document.getElementById("list");
  var li = document.createElement('li');
  //Add task to list
  li.appendChild(document.createTextNode("- "+item));
  ul.appendChild(li);
  // Clear input box
  document.getElementById('add-task-input').value="";
  // When user clicks on task, remove task from list
  li.onclick = removeTask;
 }

function removeTask(e) {
  e.target.parentElement.removeChild(e.target);
}
