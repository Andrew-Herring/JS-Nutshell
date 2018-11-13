// importing functions in order to display through inner html
import { messageForm } from "./messageForm"
import { domRender } from "./messageDomRender"
import { saveMessage } from "./saveMessage"
import { editMessage } from "./editMessage"


// adding the functions to work on the dom with inner html
const messages = (activeUser) => {
    document.querySelector("#messagesInput").innerHTML = messageForm.htmlForm()
    domRender(activeUser)
    saveMessage(activeUser)
    editMessage(activeUser)


}

export { messages }