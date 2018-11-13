// create variable that holds a function where the promise is to return the form to the dom after it has been saved
const messageForm = {
    htmlForm: () => {
        return `<div>
        <h2>Messages</h2>
        <input type="text" name="Content" id="content"><br>
        <button id="sendBtn">Send</button>
        </div>`
    },
// grab input value and equal to nothing, that will clear the form
    clearForm: () => {
        document.querySelector("#content").value = ""
    }
}

// export object to gain functions on other modules
export { messageForm }