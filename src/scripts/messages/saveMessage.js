import { messageDataManager } from "./messageDataManager"
import { messageForm } from "./messageForm"
import { domRender } from "./messageDomRender"
import { timeStamp} from "../date/timeStamp"




const saveMessage = () => {
    document.querySelector("#messagesInput").addEventListener("click", (evt) => {
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
                domRender()
            })
        }
    }
    })
}

export { saveMessage }