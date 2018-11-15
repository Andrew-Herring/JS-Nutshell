//representation of completed DOM entries
const completedTaskHtmlEntry = (entry) => {
  return `
  <div class="card text-white bg-success mb-3 shadow">
    <h3 class="card-header">${entry.task}</h3>
    <div class="card-body">
    <p class="card-text">${entry.description}</p>
    <p class="card-text">${entry.dueDate}</p>
    <button id="delete!${entry.id}" class="btn btn-danger btn-sm">Delete</button>
    <button id="editTask!${entry.id}" class="btn btn-primary btn-sm">Edit</button>
    <input type="checkbox" name="completedTask" id="completeTask!${entry.id}"> 
    <label id="checkboxLabel" for="completeTask!${entry.id}">Redo Task</label>
  </div>  
  </div>`
}

export {completedTaskHtmlEntry}