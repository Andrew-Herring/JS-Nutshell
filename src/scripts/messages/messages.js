import { messageForm } from "./messageForm"
import { domRender } from "./messageDomRender"
import { saveMessage } from "./saveMessage"

const messages = () => {
    document.querySelector("#messagesInput").innerHTML = messageForm.htmlForm()
    domRender()
    saveMessage()
}

export { messages }