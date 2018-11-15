// create variable that holds a function where the promise is to return the form to the dom after it has been saved
const messageForm = {
    htmlForm: () => {
        return `
        <div class="input-group" >
        <div class="input-group-prepend">
        <h2 class="input-group-text">Messages</h2>
        <input type="text" name="Content" id="content" class="form-control" aria-label="With textarea"><br>
        <button id="sendBtn" class="btn btn-success">Send</button>
        </div>`

//         <div class="input-group">
//   <div class="input-group-prepend">
//     <span class="input-group-text">With textarea</span>
//   </div>
//   <textarea class="form-control" aria-label="With textarea"></textarea>
// </div>
    },
// grab input value and equal to nothing, that will clear the form
    clearForm: () => {
        document.querySelector("#content").value = ""
    }
}

// export object to gain functions on other modules
export { messageForm }