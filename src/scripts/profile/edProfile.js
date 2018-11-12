import {profileDataManager} from "./profileDataManager"
import {profileDomRender} from "./profileDomRender"

const edProfile = (activeUser) => {
  document.querySelector("#profileOutput").addEventListener("click", evt => {
    if (evt.target.id.startsWith("delete")) {
      const id = evt.target.id.split("!")[1]
      profileDataManager.deleteEntries(id).then(() =>
        profileDomRender(activeUser)
      )
    }
    if (evt.target.id.startsWith("edit")) {
      const id = evt.target.id.split("!")[1]
      document.querySelector("#saveBtn").id = `editBtn!${id}`
      profileDataManager.singleEntry(id).then((entry) => {
        document.querySelector("#contact").value = entry.title
        document.querySelector("#phone").value = entry.content
        document.querySelector("#city").value = entry.date
        document.querySelector("#about").value = entry.mood
        document.querySelector("#secret").value = entry.mood


      })

    }
  })
}

export {edProfile}