// html representation that will be on the dom once saved to database and returned
const htmlMessage = (message) => {
    return `
    <div>
    <p>${message.content}</p>
    <p>${message.date}</p>
    <button id="deleteMessage!${message.id}">Delete</button>
    <button id="editMessage!${message.id}">Edit</button>
    </div>`
}



export { htmlMessage }


