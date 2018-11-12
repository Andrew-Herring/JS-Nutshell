const messageForm = {
    htmlForm: () => {
        return `<div>
        <h2>Messages</h2>
        <input type="text" name="Content" id="content"><br>
        <button id="sendBtn">Send</button>
        </div>`
    },
    clearForm: () => {
        document.querySelector("#content").value = ""
    }
}

export { messageForm }