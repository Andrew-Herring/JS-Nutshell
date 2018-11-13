import { messageDataManager } from "./messageDataManager"
import { domRender } from "./messageDomRender"


// grabbing the container and listening for a click on event that starts with delete
// taking the button splitting it to grab the index of 1 and getting the id back
const editMessage = () => {
    document.querySelector("#messagesOutput").addEventListener("click", evt => {
        if (evt.target.id.startsWith("delete")) {
            const id = evt.target.id.split("!")[1]
            messageDataManager.deleteMessages(id).then(() =>
                domRender()
                )       
        }
    })
}

export { editMessage }