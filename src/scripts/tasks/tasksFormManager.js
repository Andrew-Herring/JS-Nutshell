const tasksFormManager = {
  //this is our form that the user will interact with
  tasksForm: () => {
    return `
    <div>
      <h2>My Task List</h2>
      Task:<br>
      <input type="text" name="Task" id="taskName"><br>
      Description:<br>
      <input type="textarea" name="Description" id="description"><br>
      Due Date:<br>
      <input type="date" name="Date" id="date"><br>
      <button id="taskSaveBtn">Save</button>
    </div>
    `
  },
  //will clear the form  after the user has submitted a task
  clearForm: () => {
    document.querySelector("#taskName").value = ""
    document.querySelector("#description").value = ""
    document.querySelector("#date").value = ""
  }
}

export {tasksFormManager}