import {eventsDataManager} from "./eventsDataManager"
import {eventsEntryHtml} from "./eventsEntryHtml"


const dom = (eventEntry) => {
    document.querySelector("#eventsOutput").innerHTML += eventEntry
}

const eventsDomRender = (activeUser) => {
    //the next line will clear the dom so that it does not repeat any inputs
    document.querySelector("#eventsOutput").innerHTML = ""
    eventsDataManager.getEvent(activeUser)
        .then(events => {
            events.forEach(eventEntry => {
                const entryHtml = eventsEntryHtml(eventEntry)
                dom(entryHtml)
            })
        })
}

export {eventsDomRender}