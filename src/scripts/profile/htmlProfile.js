// how the entries are represented on the DOM
const htmlProfile = (entry) => {
  return `
  <div class="card" style="width: 22.35rem;">
    <div class="">
      <h2 class="card-title">${entry.contact}</h2>
      <h4 class="card-subtitle mb-2 text-muted" id="fav"></h4>
      <p class="card-text">${entry.phone}</p>
      <p class="card-text">${entry.city}</p>
      <p class="card-text">${entry.about}</p>
      <h5 class="card-text">A little secret...</h5>
      <p class="card-text">${entry.secret}</p>
      <button class="btn btn-success" id="favBtn!${entry.id}">Set Favorite</button>
      <button class="btn btn-warning" id="editProfile!${entry.id}">Edit Details</button>
      <button class="btn btn-danger" id="deleteProfile!${entry.id}">Delete Person</button>
      </div>    
  </div>`
}

export {htmlProfile}