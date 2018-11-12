import {dashboard} from "./dashboard/dashboard"

const activeUser = parseInt(sessionStorage.getItem("activeUser"))
dashboard(activeUser)

console.log(activeUser)
