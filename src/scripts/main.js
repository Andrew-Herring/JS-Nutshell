import {dashboard} from "./dashboard/dashboard"
import {articles} from "./articles/articles"

const activeUser = parseInt(sessionStorage.getItem("activeUser"))
dashboard(activeUser)

console.log(activeUser)

articles()