import {messageDataManager} from "./messageDataManager"
import {htmlMessage} from "./htmlMessage"


// targeting html id of messagesOutput to put in the dom
const dom = (message) => {
    document.querySelector("#messagesOutput").innerHTML += message
}


const domRender = () => {
    document.querySelector("#messagesOutput").innerHTML = ""
    messageDataManager.getMessages()
        .then(messages=> {
            console.log(messages)
            messages.forEach(message => {
                const messageHtml = htmlMessage(message)
                dom(messageHtml)
            })
        })
}

export { domRender }