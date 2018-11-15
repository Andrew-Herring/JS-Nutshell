//representation of DOM entries
const eventsEntryHtml = (eventEntry) => {
  return `
  <div class = 'event-entry' data-date="${new Date(eventEntry.date).getTime()}">
  <div class="card">
  <div class="card-body"
  <p>${eventEntry.name}</p>
  <p>${eventEntry.time}</p>
  <p>${eventEntry.date}</p>
  <p>${eventEntry.location}</p>
  <button id="delete!${eventEntry.id}" class="btn btn-primary">Delete</button>
  <button id="edit!${eventEntry.id}" class="btn btn-primary">Edit</button>
  </div>
  </div>
  </div>`
}

export {eventsEntryHtml}