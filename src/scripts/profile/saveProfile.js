import {profileDataManager} from "./profileDataManager"
import {profileFormManager} from "./profileFormManager"
import {profileDomRender} from "./profileDomRender"

// saving contact entries
const saveProfile = (activeUser) => {
  document.querySelector("#profileInput").addEventListener("click", (evt) => {
    // create an entry consisting of contact, phone, city, about, and secret fields.  Also gives them a favorite status.
    const entry = {
      contact: document.querySelector("#contact").value,
      phone: document.querySelector("#phone").value,
      city: document.querySelector("#city").value,
      about: document.querySelector("#about").value,
      secret: document.querySelector("#secret").value,
      favorite: false,
      // make sure userId comes back as a number
      userId: parseInt(activeUser)
    }
    // button behavior
    if (evt.target.id.startsWith("saveBtnProfile")) {
      // save button only works in all form fields are full
      if (!entry.contact || !entry.phone || !entry.city || !entry.about || !entry.secret) {
        alert("Please fill out all of the form fields before you submit!")
      } else {
        // if all is well then it saves to the dom and clears the form for the next entry
        profileDataManager.saveEntry(entry).then(() =>{
          profileFormManager.clearForm()
          profileDomRender(activeUser)
        })
      }
    }
    // edit button
    // pulls the post back up into the form, replaces post with new information
    if (evt.target.id.startsWith("editBtnProfile")) {
      const id = evt.target.id.split("!")[1]
      profileDataManager.editEntry(entry,id).then(() => {
        profileFormManager.clearForm()
        profileDomRender(activeUser)
        document.getElementById(`editBtnProfile!${id}`).id = "saveBtnProfile"
      })
    }
  })
}

export {saveProfile}