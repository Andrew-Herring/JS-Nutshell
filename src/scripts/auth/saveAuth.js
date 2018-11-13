import { authDataManager } from "./authDataManager"
import { authFormManager } from "./authFormManager"
import { dashboard } from "../dashboard/dashboard"
// saveAuth is a click event monitoring the #welcome id.
const saveAuth = () => {
  document.querySelector("#welcome").addEventListener("click", (evt) => {
    // the user object assigns the object for username and password values in prep to pass over to JSON
    const user = {
      username: document.querySelector("#username").value,
      password: document.querySelector("#psw").value
    }
    // if the register button is clicked...
    if (evt.target.id.startsWith("register")) {
      authDataManager.searchUsername(user.username).then((person) => {
        // check to see if username is already taken, there will be a length in the array
        if (person.length) {
          alert(`username ${user.username} is already taken!`)
          //  if there is no length, the username is unique
        } else if (!person.length) {
          // this function saves the user and then clears the form
          authDataManager.saveUser(user).then(() => {
            authFormManager.clearAuthForm()
          })
        }
      })
    }
    // if the login button is clicked...
    if (evt.target.id.startsWith("login")) {
      // username and password are passed into searchUsers function to search for matching username/password
      authDataManager.searchUsers(user.username, user.password).then((person) => {
        // the promise contains the matching object in the array
        // if no username and password is matched, they don merssed up
        if (!person.length) {
          alert("Youf don merssed up!")
          // if a username and password is matched, a length in the array is found
        } else if (person.length) {
          // active user is set within session storage along with the unique user id
          sessionStorage.setItem("activeUser", parseInt(person[0].id))
          // the active user id is retrieved from session storage and passed to variable activeUser
          const activeUser = sessionStorage.getItem("activeUser")
          // activeUser is passed to the dashboard function
          dashboard(activeUser)
        }
      })
    }
  })
}

export { saveAuth }