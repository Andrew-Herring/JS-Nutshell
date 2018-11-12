import {saveAuth} from "./saveAuth"
import {authFormManager} from "./authFormManager"

const auth = () => {
  //shows our form
  document.querySelector("#container").innerHTML = authFormManager.authForm()
  saveAuth()
}

export{auth}