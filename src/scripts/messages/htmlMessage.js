
// html representation that will be on the dom once saved to database and returned
const htmlMessage = (message) => {
    return `
    <div class="card">
    <h5 class="card-header">${message.user.username}</h5>
    <div class="card-body">
    <p class="card-text">${message.content}</p>
    <p class="card-title">${message.date}</p>
    <button class="btn btn-danger" id="deleteMessage!${message.id}">Delete</button>
    <button class="btn btn-warning" id="editMessage!${message.id}">Edit</button>
    </div>`
}




export { htmlMessage }


