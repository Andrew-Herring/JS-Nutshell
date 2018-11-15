const authFormManager = {
  // the authForm function contains the HTML representation of the login and registration screen.
  authForm: () => {
      return `
      <div class="d-flex justify-content-center">
        <div class="card w-50 text-center">
          <div class="card-header">
          </div>
          <div class="text-center card-body"  id="welcome">
            <h1 class="card-title">Welcome</h1>
            <p class="card-text">Sign in or Register for a username.</p>
            <fieldset>
              <label for="username"><b>Username</b></label>
              <input type="text" placeholder="Enter username" id="username" name="username">
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" id="psw" name="psw">
            </fieldset>
            <button type="button" class="btn btn-info" id="registerBtn">Register</button>
            <button type="button" class="btn btn-secondary" id="loginBtn">Login</button>
          </div>
        <div class="card-footer text-muted">
      </div>
    </div>
  </div>`
  },
  // clearAuthForm function clears the values from the form
  clearAuthForm: () => {
      document.querySelector("#username").value = ""
      document.querySelector("#psw").value = ""
  }
}

export {authFormManager}