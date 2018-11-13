//representation of DOM entries
const taskHtmlEntry = (entry) => {
  return `
  <div>
  <h3>${entry.task}</h3>
  <p>${entry.description}</p>
  <p>${entry.dueDate}</p>
  <button id="delete!${entry.id}">Delete</button>
  <button id="editTask!${entry.id}">Edit</button>
  </div>`
}

export {taskHtmlEntry}