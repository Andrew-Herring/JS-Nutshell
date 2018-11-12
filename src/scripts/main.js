import {dashboard} from "./dashboard/dashboard"
import { event } from "./events/events"

const activeUser = parseInt(sessionStorage.getItem("activeUser"))
dashboard(activeUser)
// event(activeUser)

console.log(activeUser)

const activeUser = parseInt(sessionStorage.getItem("activeUser"))
dashboard(activeUser)

console.log(activeUser)
