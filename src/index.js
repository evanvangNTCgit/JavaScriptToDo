let startID = 1;

function addTask(taskName) {
  let newTask = { nameOfTask: taskName };

  const taskDisplayArea = document.getElementById('taskArea');

  let divForTask = document.createElement('div');
  let h1ForTask = document.createElement('h1');
  let removeButton = document.createElement('button');
  let editButton = document.createElement('button');

  h1ForTask.textContent = `${newTask.nameOfTask}`;
  h1ForTask.id = `h1${startID}`;

  let currentIDIteration = startID;
  removeButton.textContent = 'Remove Task';
  removeButton.onclick = function () {
    removeTask(currentIDIteration);
  };

  editButton.textContent = 'Edit Task';
  editButton.style.marginLeft = '50px';
  editButton.onclick = function () {
    EditTask(currentIDIteration);
  };

  divForTask.append(h1ForTask);
  divForTask.append(removeButton);
  divForTask.append(editButton);
  divForTask.className = 'task';
  divForTask.id = `${currentIDIteration}`;
  divForTask.style.display = 'block';
  taskDisplayArea.append(divForTask);

  startID++;
}

function removeTask(input) {
  const listOfTasks = document.querySelectorAll('.task');

  listOfTasks.forEach((t) => {
    if (parseInt(t.id) === input) {
      t.remove();
    }
  });
}

function EditTask(task) {
  let newTaskName = window.prompt('New name for this task?');
  if(!newTaskName){
    window.alert('Nothing was input so nothing was edited.');
    return;
  }

  const listOfHeaders = document.getElementsByTagName('h1');

  for(let i = 0; i < listOfHeaders.length; i++){
    if(listOfHeaders[i].id === `h1${task}`){
      listOfHeaders[i].textContent = newTaskName;
    }
  }
}
