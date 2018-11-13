import {profileDataManager} from "./profileDataManager"
import {profileFormManager} from "./profileFormManager"
import {profileDomRender} from "./profileDomRender"


const saveProfile = (activeUser) => {
  document.querySelector("#profileInput").addEventListener("click", (evt) => {
    const entry = {
      contact: document.querySelector("#contact").value,
      phone: document.querySelector("#phone").value,
      city: document.querySelector("#city").value,
      about: document.querySelector("#about").value,
      secret: document.querySelector("#secret").value,
      userId: parseInt(activeUser)
    }
    if (evt.target.id.startsWith("saveBtn")) {

      if (!entry.contact || !entry.phone || !entry.city || !entry.about || !entry.secret) {
        alert("Please fill out all of the form fields before you submit!")
      } else {

        profileDataManager.saveEntry(entry).then(() =>{
          profileFormManager.clearForm()
          profileDomRender(activeUser)
        })
      }
    }
    if (evt.target.id.startsWith("editBtn")) {
      const id = evt.target.id.split("!")[1]
      profileDataManager.editEntry(entry,id).then(() => {
        profileFormManager.clearForm()
        profileDomRender(activeUser)
        document.getElementById(`editBtn!${id}`).id = "saveBtn"
      })
    }
  })
}

export {saveProfile}