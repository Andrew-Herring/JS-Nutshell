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
    <h2>To Do</h2>
    <div id="tasksOutput"></div>
    <h2>Completed</h2>
    <div id="tasksCompleted"></div>
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