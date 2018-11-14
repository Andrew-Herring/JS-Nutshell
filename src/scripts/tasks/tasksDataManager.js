const tasksUrl = "http://localhost:3000/tasks"

//house all functions that interact with the database
const tasksDataManager = {
  //this will get and render all the uncompleted tasks
  getTask: (id) => {
    return fetch(`${tasksUrl}?userId=${id}&completed=false`)
      .then(res => res.json())
  },
  //this will get and render all completed tasks
  getCompletedTask: (id) => {
    return fetch(`${tasksUrl}?userId=${id}&completed=true`)
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
  },
  //for our complete task checkbox
  completeTask: (entry, id) => {
    return fetch(`${tasksUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
  }
}

export {tasksDataManager}