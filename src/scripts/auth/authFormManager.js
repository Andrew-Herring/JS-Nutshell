const authFormManager = {
  authForm: () => {
      return `
      <div class="text-center"  id="welcome">
      <h1>Welcome</h1>
      <fieldset>
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Enter username" id="username" name="username">
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" id="psw" name="psw">
      </fieldset>
      <button type="button" class="btn btn-info" id="registerBtn">Register</button>
      <button type="button" class="btn btn-secondary" id="loginBtn">Login</button>
      </div>`
  },
  clearAuthForm: () => {
      document.querySelector("#username").value = ""
      document.querySelector("#psw").value = ""
  }
}

export {authFormManager}