// navHtml is the literal representation that is passed into the DOM.  Includes the username that will be passed in along with the logout

const navHtml = (username)=>{
  return `<ul class="nav justify-content-end">
    <li class="nav-item">
      <h4 class="nav-link">${username}!</h4>
    </li>
    <li class="nav-item">
      <button id="logoutBtn" type="button" class="nav-link btn btn-outline-dark">Logout</button>
    </li>
  </ul>`
  }



  export {navHtml}
