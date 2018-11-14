import {tasksDataManager} from "./tasksDataManager"
import {tasksDomRender} from "./tasksDomRender"
import {completeTasksDomRender} from "./completeTasksDomRender"

const completeEdTask = (activeUser) => {
  document.querySelector("#tasksCompleted").addEventListener("click", (event) => {
    if (event.target.id.startsWith("delete")) {
     //this will take id and the split will break the id up into an array
      const id = event.target.id.split("!")[1]
      //delete it and rerender the dom
      tasksDataManager.deleteTask(id).then(() =>
      completeTasksDomRender(activeUser)
      )
    }
    //edit functionallity 
    if (event.target.id.startsWith("edit")) {
      const id = event.target.id.split("!")[1]
      document.querySelector("#taskSaveBtn").id = `editBtn!${id}`
      tasksDataManager.singleEntry(id).then((entry) => {
        //change our values 
        document.querySelector("#taskName").value = entry.task
        document.querySelector("#description").value = entry.description
        document.querySelector("#date").value = entry.dueDate
      })
    }
    //complete checkbox
    if (event.target.id.startsWith("completeTask")) {
      const id = event.target.id.split("!")[1]
      const checked = {"completed": false}

      tasksDataManager.completeTask(checked, id).then(() => {
        completeTasksDomRender(activeUser)
        tasksDomRender(activeUser)
    })
  }
  })
}

export {completeEdTask}