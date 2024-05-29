const todo = document.getElementById("todo")
/*
todo.innerHTML = `

<div id="todoItem">
<form id="todoEdit">
<h4 id="todoTile">Get work done</h4>
<div id="buttonsContainer">
<button type="submit" id="delete">Delete</button>
<button type="submit" id="delete">Edit</button>
</div>
</form>
</div>

<div id="todoItem">
<form id="todoEdit">
<h4 id="todoTile">Get work done</h4>
<div id="buttonsContainer">
<button type="submit" id="delete">Delete</button>
<button type="submit" id="delete">Edit</button>
</div>
</form>
</div>

`
*/

document.addEventListener('DOMContentLoaded', function() {
  fetchTasks();

  document.getElementById('todoForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const taskInput = document.getElementById('todoInput');
      const task = taskInput.value;

      fetch('add_task.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'task=' + encodeURIComponent(task)
      })
      .then(response => response.text())
      .then(data => {
          console.log(data);
          fetchTasks();
          taskInput.value = '';
      })
      .catch(error => console.error('Error:', error));
  });
});

function fetchTasks() {
  fetch('get_tasks.php')
      .then(response => response.json())
      .then(data => {
          const taskList = document.getElementById('todo');
          taskList.innerHTML = '';
          data.forEach(task => {
              const li = document.createElement('li');
              li.textContent = task.task;
              taskList.appendChild(li);
          });
      })
      .catch(error => console.error('Error:', error));
}
