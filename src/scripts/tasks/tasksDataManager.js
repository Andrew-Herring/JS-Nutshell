const tasksUrl = "http://localhost:3000/tasks"

//house all functions that interact with the database
const tasksDataManager = {
  getTask: (id) => {
    return fetch(`${tasksUrl}?userId=${id}`)
      .then(res => res.json())
  },
  saveTask: (entry) => {
    return fetch(`${tasksUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(res => res.json());
  },
  deleteTask: (id) => {
    return fetch(`${tasksUrl}/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
  },
  editTask: (entry, id) => {
    return fetch(`${tasksUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(res => res.json())
  },
  singleEntry: (id) => {
    return fetch(`${tasksUrl}/${id}`)
      .then(res => res.json())
  }
}

export {tasksDataManager}