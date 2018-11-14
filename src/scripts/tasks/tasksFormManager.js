const tasksFormManager = {
  //this is our form that the user will interact with
  tasksForm: () => {
    return `
    <div>
      <h2>My Task List</h2>
      Task:
      <input type="text" name="Task" id="taskName">
      Description:
      <input type="textarea" name="Description" id="description">
      Due Date:
      <input type="date" name="Date" id="date">
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