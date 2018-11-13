//html representation and clear functions
const eventsFormHtml = {
  htmlForm: () => {
      return `<div>
Name:<br>
<h2>Events</h2>
<input type="text" name="Name" id="name"><br>
Date:<br>
<input type="datetime-local" name="Date" id="date"><br>
Location:<br>
<input type="text" name="Location" id="location"><br>
<button id="saveBtn">Save</button>
</div>`
  },
  clearForm: () => {
      document.querySelector("#name").value =  ""
      document.querySelector("#date").value =  ""
      document.querySelector("#location").value =  ""
  }
}

export {eventsFormHtml}