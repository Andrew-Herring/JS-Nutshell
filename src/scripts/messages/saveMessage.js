// importing all functions from other modules
import { messageDataManager } from "./messageDataManager"
import { messageForm } from "./messageForm"
import { domRender } from "./messageDomRender"
import { timeStamp} from "../date/timeStamp"

// naming a function that has a event listener on click
const saveMessage = (activeUser) => {
    document.querySelector("#messagesInput").addEventListener("click", (evt) => {
        
// variable message is getting the input value as a promise after the click
        const message = {
            content: document.querySelector("#content").value,
            date: timeStamp()
        }
        if (evt.target.id.startsWith("sendBtn")) {
            if (!message.content){
            alert("please fill out message!")
        } else {
            messageDataManager.saveMessage(message).then(() => {
                messageForm.clearForm()
                domRender(activeUser)
            })
        }
    }
    if (evt.target.id.startsWith("editMessage")) {
        const id = evt.target.id.split("!")[1]
        messageDataManager.editMessage(message, id).then(() => {
            messageForm.clearForm()
            domRender(activeUser)
            document.getElementById(`editMessageBtn!${id}`).id = "sendBtn"
        })
    }
    })
}

export { saveMessage }