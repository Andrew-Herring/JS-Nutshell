const tasksUrl = "http://localhost:3000/tasks"

//house all functions that interact with the database
const tasksDataManager = {
  
  saveTask: (task) => {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
  }).then(res => res.json());
  } 
}

export {tasksDataManager}