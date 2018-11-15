const tasksFormManager = {
  //this is our form that the user will interact with
  tasksForm: () => {
    return `
    <div class="card p-3 mb-2 bg-light text-dark">
      <div class="card-body">
        <h2>My Task List</h2>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="taskName">Task</label>
              <input type="text" name="Task" class="form-control" id="taskName" placeholder="Add a task">
            </div>
            <div class="form-group col-md-6">
              <label for="date">Due Date</label>
              <input type="date" name="Date" class="form-control" id="date">
            </div>
            <div class="form-group w-100 p-3">
              <label for="description">Description</label>
              <input type="text" name="Description" class="form-control " id="description" placeholder="Make sure to...">
            </div>
          </div>
          <button class="btn btn-primary" id="taskSaveBtn">Save</button>
      </div>
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