import {authDataManager} from "./authDataManager"
import {authFormManager} from "./authFormManager"
import {dashboard} from "../dashboard/dashboard"

const saveAuth = () => {
  document.querySelector("#welcome").addEventListener("click", (evt) => {
    const user = {
      username: document.querySelector("#username").value,
      password: document.querySelector("#psw").value
    }
    if (evt.target.id.startsWith("register")) {
      authDataManager.searchUsername(user.username).then((person) => {
        // check to see if username is already taken
        if (person.length) {
          alert(`username ${user.username} is already taken!`)
        } else if (!person.length) {
          // save our user and clear the form
          authDataManager.saveUser(user).then(() => {
            authFormManager.clearAuthForm()
          })
        }
      })
    }
    if (evt.target.id.startsWith("login")) {
      authDataManager.searchUsers(user.username, user.password).then((person) => {

        if (!person.length) {
          alert("You've don merssed up!")
        } else if (person.length) {
          //parseInt will make sure this is always a number
          sessionStorage.setItem("activeUser", parseInt(person[0].id))
          const activeUser = sessionStorage.getItem("activeUser")
          dashboard(activeUser)
        }
      })
    }
  })
}

export {saveAuth}