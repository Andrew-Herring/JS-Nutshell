import { messageForm } from "./messageForm"
import { domRender } from "./messageDomRender"
import { saveMessage } from "./saveMessage"
import { editMessage } from "./editMessage"

const messages = () => {
    document.querySelector("#messagesInput").innerHTML = messageForm.htmlForm()
    domRender()
    saveMessage()
    editMessage()


}

export { messages }