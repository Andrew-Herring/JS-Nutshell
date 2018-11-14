//Form that is displayed for entering information
const profileFormManager = {
  profileForm: () => {
    return `
    <div>
    <h2>Your Friends' info!</h2>
    Contact:<br>
    <input type="text" name="Contact" id="contact"><br>
    Phone:<br>
    <input type="text" name="Phone" id="phone"><br>
    City:<br>
    <input type="text" name="City" id="city"><br>
    About:<br>
    <textarea rows="3" cols="20" name="About" id="about"></textarea><br>
    Secret:<br>
    <textarea rows="3" cols="20" type="text" name="Secret" id="secret"></textarea><br>
    <input type="checkbox" name="jenna" id="checkbox">Are they a Jenna?<br>
    <button id="saveBtnProfile">Save Person</button>
    </div>`
  },
  // clears form after entry to avoid repeat entires
    clearForm: () => {
      document.querySelector("#contact").value = ""
      document.querySelector("#phone").value = ""
      document.querySelector("#city").value = ""
      document.querySelector("#about").value = ""
      document.querySelector("#secret").value = ""
      document.querySelector("#checkbox").value = ""
    }
}

export {profileFormManager}