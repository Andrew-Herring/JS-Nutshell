import { messageDataManager } from "./messageDataManager"
import { domRender } from "./messageDomRender"

const editMessage = () => {
    document.querySelector("#messagesOutput").addEventListener("click", evt => {
        if (evt.target.id.startsWith("delete")) {
            const id = evt.target.id.split("!")[1]
            messageDataManager.deleteMessages(id).then(() =>
                domRender())
        }
    })
}

export { editMessage }