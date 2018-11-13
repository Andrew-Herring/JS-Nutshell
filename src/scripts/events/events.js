import { eventsDomRender } from "./eventsDomRender"
import { eventsFormHtml } from "./eventsFormHtml"
import { edEvent } from "./eventsEditDelete"
import { saveEvent } from "./saveEvent"

const event = (activeUser) => {
  //below will display our form on the page
  document.querySelector("#eventsInput").innerHTML = eventsFormHtml.htmlForm()
  eventsDomRender(activeUser)
  saveEvent(activeUser)
  edEvent(activeUser)
}

export {event}