//representation of DOM entries
const eventsEntryHtml = (eventEntry) => {
  return `
  <div>
  <p>${eventEntry.name}</p>
  <p>${eventEntry.date}</p>
  <p>${eventEntry.location}</p>
  <button id="delete!${eventEntry.id}">Delete</button>
  <button id="edit!${eventEntry.id}">Edit</button>
  </div>`
}

export {eventsEntryHtml}