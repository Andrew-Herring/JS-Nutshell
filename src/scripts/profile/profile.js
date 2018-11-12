import {profileFormManager} from "./profileFormManager"
import {profileDomRender} from "./profileDomRender"
import {saveProfile} from "./saveProfile"
import {edProfile} from "./edProfile"



const profile = (activeUser) => {
  document.querySelector("#profileInput").innerHTML = profileFormManager.profileForm()
  profileDomRender(activeUser)
  saveProfile(activeUser)
  edProfile(activeUser)
}

export {profile}