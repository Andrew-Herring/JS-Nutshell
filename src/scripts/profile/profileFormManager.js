const profileFormManager = {
  profileForm: () => {
    return `
    <div>
    Contact:<br>
    <input type="text" name="Contact" id="contact"><br>
    Phone:<br>
    <input type="text" name="Phone" id="phone"><br>
    City:<br>
    <input type="text" name="City" id="city"><br>
    About:<br>
    <input type="text" name="About" id="about"><br>
    Secret:<br>
    <input type="text" name="Secret" id="secret"><br>
    <button id="saveBtn">Save</button>
    </div>`
  },
    clearForm: () => {
      document.querySelector("#contact").value = ""
      document.querySelector("#phone").value = ""
      document.querySelector("#city").value = ""
      document.querySelector("#about").value = ""
      document.querySelector("#secret").value = ""
    }
}

export {profileFormManager}