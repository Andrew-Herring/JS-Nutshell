// how the entries are represented on the DOM
const htmlProfile = (entry) => {
  return `
  <div>
  <h2>${entry.contact}</h2>
  <p>${entry.phone}</p>
  <p>${entry.city}</p>
  <p>${entry.about}</p>
  <p>${entry.secret}</p>
  <button id="deleteProfile!${entry.id}">Delete Person</button>
  <button id="editProfile!${entry.id}">Edit Details</button>
  </div>`
}

export {htmlProfile}