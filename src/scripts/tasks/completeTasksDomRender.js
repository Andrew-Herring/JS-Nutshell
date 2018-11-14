import {tasksDataManager} from "./tasksDataManager"
import {completedTaskHtmlEntry} from "./completedTaskHtmlEntry"

const dom = (entry) => {
  document.querySelector("#tasksCompleted").innerHTML += entry
}

const completeTasksDomRender = (activeUser) => {
  //the next line will clear the dom so that it does not repeat any inputs
  document.querySelector("#tasksCompleted").innerHTML = ""
  tasksDataManager.getCompletedTask(activeUser)
    .then(entries => {
      entries.forEach(entry => {
        const entryHtml = completedTaskHtmlEntry(entry)
        dom(entryHtml)
      })
    })
}

export {completeTasksDomRender}