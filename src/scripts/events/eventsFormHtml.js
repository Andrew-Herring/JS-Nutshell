//html representation and clear functions
const eventsFormHtml = {
  htmlForm: () => {
      return `
<h2>Events</h2>
<div>
Name:<br>
<input type="text" name="Name" id="name"><br>
Time:<br>
<input type="time" name"Time" id="eventTime"><br>
Date</br>
<input type="date" name="Date" id="eventDate"><br>
Location:<br>
<input type="text" name="Location" id="location"><br>
<button id="saveEventBtn">Save</button>
</div>`
  },
  clearForm: () => {
      document.querySelector("#name").value =  ""
      document.querySelector("#eventTime").value =  ""
      document.querySelector("#eventDate").value =  ""
      document.querySelector("#location").value =  ""
  }
}

export {eventsFormHtml}