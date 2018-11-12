import {tasksFormManager} from "./tasksFormManager"
import {saveTask} from "./saveTask";

const tasks = (activeUser) => {
  //below will display tasks form on the page
  document.querySelector("#tasksInput").innerHTML = tasksFormManager.tasksForm()
  // domRender(activeUser)
    saveTask(activeUser)
  // edJournal(activeUser)
  }
  
  export {tasks}