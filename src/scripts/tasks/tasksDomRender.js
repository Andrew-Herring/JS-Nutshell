import {tasksDataManager} from "./tasksDataManager"
import {taskHtmlEntry} from "./taskHtmlEntry"

const dom = (entry) => {
  document.querySelector("#tasksOutput").innerHTML += entry
}

const tasksDomRender = (activeUser) => {
  //the next line will clear the dom so that it does not repeat any inputs
  document.querySelector("#tasksOutput").innerHTML = ""
  tasksDataManager.getTask(activeUser)
  .then(entries =>{
    entries.forEach(entry => {
      const entryHtml = taskHtmlEntry(entry)
      dom(entryHtml) 
    })
  })
}

export {tasksDomRender}