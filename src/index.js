let tasks = [];

function addTask(priorityNum, taskName) {
  let newTask = { priorityNumber: priorityNum, nameOfTask: taskName };

  tasks.push(newTask);
  drawTasksArea(tasks);
}

function drawTasksArea(listOfTasks) {
  const taskDisplayArea = document.getElementById('taskArea');

  // TODO: fix the weird cloning that happend when you keep adding tasks.
  const oldListArea = taskDisplayArea.getElementsByTagName('div');
  for (let i = 0; i < oldListArea.length; i++) {
    oldListArea[i].remove();
  }

  listOfTasks.forEach((t) => {
    let divForTask = document.createElement('div');
    let h1ForTask = document.createElement('h1');

    h1ForTask.textContent = `${t.priorityNumber}: ${t.nameOfTask}`;

    divForTask.append(h1ForTask);
    divForTask.className = 'task';
    taskDisplayArea.append(divForTask);
  });
}
