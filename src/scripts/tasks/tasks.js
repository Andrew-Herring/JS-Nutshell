import {tasksFormManager} from "./tasksFormManager"
import {saveTask} from "./saveTask";
import {tasksDomRender} from "./tasksDomRender"
import {edTask} from "./edTask"
import {completeTasksDomRender} from "./completeTasksDomRender"
import {completeEdTask} from "./completeEdTask"

const tasks = (activeUser) => {
  //below will display tasks form on the page
  document.querySelector("#tasksInput").innerHTML = tasksFormManager.tasksForm()
  tasksDomRender(activeUser)
  completeTasksDomRender(activeUser)
  saveTask(activeUser)
  edTask(activeUser)
  completeEdTask(activeUser)
}
  
  export {tasks}