// how the entries are represented on the DOM
const htmlProfile = (entry) => {
  return `
  <div>
  <h2>${entry.contact}</h2>
  <h4 id="fav"></h4>
  <p>${entry.phone}</p>
  <p>${entry.city}</p>
  <p>${entry.about}</p>
  <p>${entry.secret}</p>
  <button id="deleteProfile!${entry.id}">Delete Person</button>
  <button id="editProfile!${entry.id}">Edit Details</button>
  <button id="favBtn!${entry.id}">Set Favorite</button>
  </div>`
}

export {htmlProfile}