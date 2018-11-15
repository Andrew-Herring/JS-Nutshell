//representation of DOM entries
const taskHtmlEntry = (entry) => {
  return `
  <div class="card w-50 text-white bg-warning mb-3">
    <h3 class="card-header">${entry.task}</h3>
    <div class="card-body">
    <p class="card-text">${entry.description}</p>
    <p class="card-text">${entry.dueDate}</p>
    <button id="delete!${entry.id}" class="btn btn-primary">Delete</button>
    <button id="editTask!${entry.id}" class="btn btn-primary">Edit</button>
    <input type="checkbox" name="completedTask" id="completeTask!${entry.id}"> 
    <label id="checkboxLabel" for="completeTask!${entry.id}">All Done</label>
  </div>  
  </div>`
}

export {taskHtmlEntry}