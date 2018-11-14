import {profileDataManager} from "./profileDataManager"
import {profileDomRender} from "./profileDomRender"
// edit and delete functions

const edProfile = (activeUser) => {
  document.querySelector("#profileOutput").addEventListener("click", evt => {
    // delete entry
    if (evt.target.id.startsWith("delete")) {
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
    // fav button
    if (evt.target.id.startsWith("favBtn")) {
      profileDataManager.FavEntry().then((entry) => {
        document.querySelector("#favBtn").value = true
      })
    }
  })
}

export {edProfile}