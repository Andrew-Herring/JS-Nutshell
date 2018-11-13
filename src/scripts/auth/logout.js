import {dashboard} from "../dashboard/dashboard"
// logout click event monitors the logoutBtn to remove session storage, logs out active user and takes the user back to the login screen.
const logout = () => {
  document.querySelector("#logoutBtn").addEventListener("click", ()=> {
    sessionStorage.removeItem("activeUser")
    const activeUser = sessionStorage.getItem("activeUser")
    dashboard(activeUser)
    })
}

export {logout}