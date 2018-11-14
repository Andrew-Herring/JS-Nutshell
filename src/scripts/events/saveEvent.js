import { eventsDataManager } from "./eventsDataManager"
import { eventsFormHtml } from "./eventsFormHtml"
import { eventsDomRender } from "./eventsDomRender"

const saveEvent = (activeUser) => {
    document.querySelector("#saveEventBtn").addEventListener("click", (evt) => {
        const event = {
            name: document.querySelector("#name").value,
            time: document.querySelector("#eventTime").value,
            date: document.querySelector("#eventDate").value,
            location: document.querySelector("#location").value,
            userId: parseInt(activeUser)
        }
        if (evt.target.id.startsWith("saveEventBtn")) {
      //this will check to make sure all inputs are filled out before saving to our database
            if (!event.name || !event.date || !event.time || !event.location) {
                alert("please fill out form!")
            } else {
        //save the info            then once the promise is fufilled
                eventsDataManager.saveEvent(event).then(() => {
                      //clear our inputs
                    eventsFormHtml.clearForm()
                   //and post it to the DOM
                    eventsDomRender(activeUser)
                })
            }
        }
        if (evt.target.id.startsWith("editBtn")) {
          const id = evt.target.id.split("!")[1]
          eventsDataManager.editEvent(event, id).then(()=> {
            eventsFormHtml.clearForm()
            eventsDomRender(activeUser)
            document.getElementById(`editBtn!${id}`).id = "saveBtn"
          })
        }
    })
}

export { saveEvent }