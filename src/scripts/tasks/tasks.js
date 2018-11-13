import {tasksFormManager} from "./tasksFormManager"
import {saveTask} from "./saveTask";
import {tasksDomRender} from "./tasksDomRender"
import {edTask} from "./edTask"

const tasks = (activeUser) => {
  //below will display tasks form on the page
  document.querySelector("#tasksInput").innerHTML = tasksFormManager.tasksForm()
  tasksDomRender(activeUser)
  saveTask(activeUser)
  edTask(activeUser)
}
  
  export {tasks}