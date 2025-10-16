/*
There should only be one task with a specific priority
Meaning for example only one task with priority 1.
*/

let tasks = [];

function addTask(taskPriority, taskName) {
  taskPriority = parseInt(taskPriority);

  if (!verifyPriority(tasks, taskPriority)) {
    window.alert('Please do not use duplicate priority numbers.');
    return;
  }

  let newTask = { priorityNumber: taskPriority, nameOfTask: taskName };

  tasks.push(newTask);

  const taskDisplayArea = document.getElementById('taskArea');

  let divForTask = document.createElement('div');
  let h1ForTask = document.createElement('h1');
  let removeButton = document.createElement('button');

  //TODO: 
  // Come up with a way to edit the tasks.

  h1ForTask.textContent = `${newTask.priorityNumber}: ${newTask.nameOfTask}`;

  removeButton.textContent = 'Remove Task';
  removeButton.onclick = function () {
    removeTask(newTask.priorityNumber);
  };

  divForTask.append(h1ForTask);
  divForTask.append(removeButton);
  divForTask.className = 'task';
  divForTask.style.display = 'block';
  taskDisplayArea.append(divForTask);

  reorderList();
}

function verifyPriority(taskList, input) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].priorityNumber === input) {
      return false;
    }
    return true;
  }
  return true;
}

function reorderList() {
  for (let i = 0; i < tasks.length; i++) {
    for (let j = i + 1; j < tasks.length; j++) {
      if (tasks[i].priorityNumber > tasks[j].priorityNumber) {
        let temp = tasks[i];
        tasks[i] = tasks[j];
        tasks[j] = temp;
      }
    }
  }
}

function removeTask(input) {
  let listOfTasks = document.querySelectorAll('.task');

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].priorityNumber === input) {
      tasks.splice(i, 1);
    }
  }

  listOfTasks.forEach((t) => {
    if (t.textContent.startsWith(input, 0)) {
      t.remove();
    }
  });
}
