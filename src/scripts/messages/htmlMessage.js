
const htmlMessage = (message) => {
    return `
    <div styly="color:blue">
    <p>${message.content}</p>
    <p>${message.date}</p>
    <button id="delete!${message.id}">Delete</button>
    <button id="edit!${message.id}">Edit</button>
    </div>`
}



export { htmlMessage }


