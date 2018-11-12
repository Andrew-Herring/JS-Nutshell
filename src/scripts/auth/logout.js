import {dashboard} from "../dashboard/dashboard"

const logout = () => {
  document.querySelector("#logoutBtn").addEventListener("click", ()=> {
    sessionStorage.removeItem("activeUser")
    const activeUser = sessionStorage.getItem("activeUser")
    dashboard(activeUser)
    })
}

export {logout}