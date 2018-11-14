// html representation that will be on the dom once saved to database and returned
const htmlBasic = (message) => {
    return `
    <div>
    <p>User:<br>${message.user.username}</p>
    <p>${message.content}</p>
    <p>${message.date}</p>
    </div>`
}

export { htmlBasic }