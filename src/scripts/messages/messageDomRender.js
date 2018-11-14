import { messageDataManager } from "./messageDataManager"
import { htmlMessage } from "./htmlMessage"
import { htmlBasic } from "./htmlBasic"


// targeting html id of messagesOutput to put in the dom
const dom = (message) => {
    document.querySelector("#messagesOutput").innerHTML += message
}


const domRender = (activeUser) => {
    document.querySelector("#messagesOutput").innerHTML = ""
    messageDataManager.getMessages()
        .then(messages => {
            console.log(messages)
            messages.forEach(message => {
                let messageHtml = ""
                if (message.userId === activeUser) {
                    messageHtml += htmlMessage(message)
                } else {
                    messageHtml += htmlBasic(message) 
                } 
                dom(messageHtml)
            })
        })
    }

export { domRender }