import {profileFormManager} from "./profileFormManager"
import {profileDomRender} from "./profileDomRender"
import {saveProfile} from "./saveProfile"
import {edProfile} from "./edProfile"
// Import everything here, display relevent information to the active user
const profile = (activeUser) => {
  document.querySelector("#profileInput").innerHTML = profileFormManager.profileForm()
  profileDomRender(activeUser)
  saveProfile(activeUser)
  edProfile(activeUser)
}
// export function to be used in dashboard.js
export {profile}