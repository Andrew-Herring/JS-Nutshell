import {tasksDataManager} from "./tasksDataManager"
import {tasksFormManager} from "./tasksFormManager"

const saveTask = (activeUser) => {
  document.querySelector("#tasksInput").addEventListener("click", (event) => {
    const entry = {
      task: document.querySelector("#taskName").value,
      description: document.querySelector("#description").value,
      dueDate: document.querySelector("#date").value
    }
    if (event.target.id.startsWith("taskSaveBtn")) {
      //this will check to make sure all inputs are filled out before saving to our database
      if (!entry.task || !entry.description || !entry.dueDate) {
        alert("please fill out full form!")
      } else {
        //save the info            then once the promise is fufilled
        tasksDataManager.saveTask(event).then(() => {
          //clear all inputs
          formManager.clearForm()
          //and post it to the DOM
          // TODO:domRender(activeUser)
        })
      }
    }
    //TODO: add edit btn functionality 
  })
}

export {saveTask}