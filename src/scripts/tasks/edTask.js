import {tasksDataManager} from "./tasksDataManager"
import {tasksDomRender} from "./tasksDomRender"

const edTask = (activeUser) => {
    document.querySelector("#tasksOutput").addEventListener("click", (event) => {
     if (event.target.id.startsWith("delete")) {
       const id = event.target.id.split("!")[1]
       //delete it and rerender the dom
       tasksDataManager.deleteTask(id).then(() =>
         tasksDomRender(activeUser)
       )
     }
     //edit functionallity 
     if (event.target.id.startsWith("edit")) {
      //this will take id and the split will break the id up into an array
       const id = event.target.id.split("!")[1]
       document.querySelector("#taskSaveBtn").id = `editBtn!${id}`
       tasksDataManager.singleEntry(id).then((entry) => {
         //change our values 
         document.querySelector("#taskName").value = entry.task
         document.querySelector("#description").value = entry.description
         document.querySelector("#date").value = entry.dueDate         
       })
     }
  })
}

export {edTask}