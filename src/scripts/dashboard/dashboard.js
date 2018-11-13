import {dashHtml} from "./dashHtml"
import {tasks} from "../tasks/tasks"
import { event } from "../events/events"
import {messages} from "../messages/messages"
import { auth } from "../auth/auth";
import {logout} from "../auth/logout";
import {navHtml} from "../nav/navHtml";
import {getUserName} from "../auth/getUserName";
import { profile } from "../profile/profile";
import {articles} from "../articles/articles"

const dashboard = (activeUser) => {
  //if no active user take to the authentication page
  if (!activeUser) {
    auth()
  } else if (activeUser) {
    //if there is an active user take them to main page
    document.querySelector("#container").innerHTML = dashHtml()
    //pulls in nav bar and logout function(click event)
    getUserName(activeUser).then((username) => {
      document.querySelector("nav").innerHTML = navHtml(username)
      logout()
    })


  //all modules are called for display on the main user page
    tasks(activeUser)
    messages(activeUser)
    profile(activeUser)
    event(activeUser)
    articles(activeUser)
  }
}



export {dashboard}