import {saveAuth} from "./saveAuth"
import {authFormManager} from "./authFormManager"

// auth places the authentication form into the div for the id container, then invokes the saveAuth function

const auth = () => {
  document.querySelector("#container").innerHTML = authFormManager.authForm()
  saveAuth()
}

export{auth}