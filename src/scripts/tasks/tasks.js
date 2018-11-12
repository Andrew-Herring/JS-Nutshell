import {tasksFormManager} from "./tasksFormManager"
import {saveTask} from "./saveTask";
import {tasksDomRender} from "./tasksDomRender"

const tasks = (activeUser) => {
  //below will display tasks form on the page
  document.querySelector("#tasksInput").innerHTML = tasksFormManager.tasksForm()
    tasksDomRender(activeUser)
    saveTask(activeUser)
  // edJournal(activeUser)
  }
  
  export {tasks}