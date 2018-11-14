//representation of completed DOM entries
const completedTaskHtmlEntry = (entry) => {
  return `
  <div>
    <h3>${entry.task}</h3>
    <p>${entry.description}</p>
    <p>${entry.dueDate}</p>
    <button id="delete!${entry.id}">Delete</button>
    <button id="editTask!${entry.id}">Edit</button>
    <input type="checkbox" name="completedTask" id="completeTask!${entry.id}"> 
    <label id="checkboxLabel" for="completeTask!${entry.id}">Redo Task</label>
  </div>`
}

export {completedTaskHtmlEntry}