import {tasksDataManager} from "./tasksDataManager"
import {tasksFormManager} from "./tasksFormManager"
import {tasksDomRender} from "./tasksDomRender";


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
        tasksDataManager.saveTask(entry).then(() => {
          //clear all inputs
          tasksFormManager.clearForm()
          //and post it to the DOM
          tasksDomRender(activeUser)
        })
      }
    }
    if (event.target.id.startsWith("editBtn")) {
      const id = event.target.id.split("!")[1]
      tasksDataManager.editTask(entry, id).then(() => {
        tasksFormManager.clearForm()
        tasksDomRender(activeUser)
        document.getElementById(`editBtn!${id}`).id = "saveBtn"
      })
    }
  })
}

export {saveTask}