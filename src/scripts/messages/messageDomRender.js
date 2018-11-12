import {messageDataManager} from "./messageDataManager"
import {htmlMessage} from "./htmlMessage"

const dom = (message) => {
    document.querySelector("#messagesOutput").innerHTML += message
}

const domRender = () => {
    document.querySelector("#messagesOutput").innerHTML = ""
    messageDataManager.getMessages()
        .then(messages=> {
            messages.forEach(message => {
                const messageHtml = htmlMessage(message)
                dom(messageHtml)
            })
        })
}

export { domRender }