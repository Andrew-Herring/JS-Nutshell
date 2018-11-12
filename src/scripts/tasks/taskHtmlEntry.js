//representation of DOM entries
const taskHtmlEntry = (entry) => {
  return `
  <div>
  <h3>${entry.taskName}</h3>
  <p>${entry.description}</p>
  <p>${entry.date}</p>
  <button id="delete!${entry.id}">Delete</button>
  <button id="edit!${entry.id}">Edit</button>
  </div>`
}

export {taskHtmlEntry}