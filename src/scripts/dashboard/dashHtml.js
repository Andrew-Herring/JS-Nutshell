const dashHtml = () => {
// dashHtml returns the literal HTML representation of all containers that will hold each module
  return `
  <nav></nav>
  <h1>Welcome G-popi</h1>
  <div class="container" id="messages">

  <div id="messagesOutput"></div>
    <div id="messagesInput"></div>
  </div>
  <div class="container" id="tasks">
    <div id="tasksInput"></div>
    <div class="card p-3 mb-2 bg-info text-white">
      <div class="card-body ">
        <h2>To Do</h2>
        <div id="tasksOutput"></div>
      </div>
    </div>
    <div class="card p-3 mb-2 bg-light text-dark">
      <div class="card-body">
        <h2>Completed</h2>
        <div id="tasksCompleted"></div>
      </div>
    </div> 
  </div>
  <div class="container" id="events">
    <div id="eventsInput"></div>
    <div id="eventsOutput"></div>
  </div>
  <div class="container" id="articles">
    <div id="articlesInput"></div>
    <div id="articlesOutput"></div>
  </div>
  <div class="container" id="profile">
    <div id="profileInput"></div>
    <div id="profileOutput"></div>
  </div>
  `
}

export {dashHtml}