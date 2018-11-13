import {profileDataManager} from "./profileDataManager"
import {profileDomRender} from "./profileDomRender"
// edit and delete functions

// delete an entry
const edProfile = (activeUser) => {
  document.querySelector("#profileOutput").addEventListener("click", evt => {
    if (evt.target.id.startsWith("delete")) {
      // target posts id and delete it
      const id = evt.target.id.split("!")[1]
      profileDataManager.deleteEntries(id).then(() =>
        profileDomRender(activeUser)
      )
    }
    // edit an entry
    if (evt.target.id.startsWith("edit")) {
      // target a posts id and change it
      const id = evt.target.id.split("!")[1]
      // save changes to the dom
      document.querySelector("#saveBtnProfile").id = `editBtnProfile!${id}`
      profileDataManager.singleEntry(id).then((entry) => {
        document.querySelector("#contact").value = entry.contact
        document.querySelector("#phone").value = entry.phone
        document.querySelector("#city").value = entry.city
        document.querySelector("#about").value = entry.about
        document.querySelector("#secret").value = entry.secret


      })

    }
  })
}

export {edProfile}