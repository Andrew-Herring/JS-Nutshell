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
     //TODO:throw your edit functionallity 

  })
}