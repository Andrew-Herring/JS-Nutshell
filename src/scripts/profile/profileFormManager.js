const profileFormManager = {
  profileForm: () => {
    return `
    <div>
    Contact:<br>
    <input type="text" name="Contact" placeholder="Persons name" id="contact"><br>
    Phone:<br>
    <input type="text" name="Phone" placeholder="Phone Number" id="phone"><br>
    City:<br>
    <input type="text" name="City" placeholder="Where are they from?" id="city"><br>
    About:<br>
    <input type="text" name="About" placeholder="Who is this person?" id="about"><br>
    Secret:<br>
    <input type="text" name="Secret" placeholder="What's the skinny" id="secret"><br>
    <button id="saveBtn">Save Person</button>
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