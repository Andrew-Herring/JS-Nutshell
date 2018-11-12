const dashHtml = () => {
  //come back and change classes for styling 
  return `
  <nav></nav>
  <h1>Welcome G-popi</h1>
  <div class="container" id="messages">
    <div id="messagesInput"></div>
    <div id="messagesOutput"></div>
  </div>
  <div class="container" id="tasks">
    <div id="tasksInput"></div>
    <div id="tasksOutput"></div>
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