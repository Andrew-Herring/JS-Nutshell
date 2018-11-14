import {eventsDataManager} from "./eventsDataManager"
import {eventsDomRender} from "./eventsDomRender"

const edEvent = (activeUser) => {
    document.querySelector("#eventsOutput").addEventListener("click", evt => {
        if (evt.target.id.startsWith("delete")) {
            const id = evt.target.id.split("!")[1]
           //delete it and rerender the dom
            eventsDataManager.deleteEvent(id).then(() =>
                eventsDomRender(activeUser)
            )
        }

        if (evt.target.id.startsWith("edit")) {
          const id = evt.target.id.split("!")[1]
          document.querySelector("#saveEventBtn").id = `editBtn!${id}`
            eventsDataManager.singleEvent(id).then((event) => {
               document.querySelector("#name").value = event.name
               document.querySelector("#eventDate").value = event.date
               document.querySelector("#eventTime").value = event.time
               document.querySelector("#location").value = event.location
            })

        }
    })
}

export {edEvent}