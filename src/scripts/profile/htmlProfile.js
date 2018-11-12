const htmlProfile = (entry) => {
  return `
  <div>
  <h2>${entry.contact}</h2>
  <p>${entry.phone}</p>
  <p>${entry.city}</p>
  <p>${entry.about}</p>
  <p>${entry.secret}</p>
  <button id="delete!${entry.id}">Delete Person</button>
  <button id="edit!${entry.id}">Edit Details</button>
  </div>`
}

export {htmlProfile}