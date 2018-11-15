// html representation that will be on the dom once saved to database and returned
const htmlBasic = (message) => {
    return `
    <div class="card">
    <h5 class="card-header">${message.user.username}</h5>
    <div class="card-body">
    <p class="card-text">${message.content}</p>
    <p class="card-title">${message.date}</p>
    </div>`
}

{/* <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

export { htmlBasic }