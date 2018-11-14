// articlesHtmlEntry is the literal HTML code that will be displayed in the DOM once the JSON entries are retrieved. "entry" will represent each unique article object passed from JSON to the DOM.
// Includes buttons for Edit and Delete. Each button will grab the unique entry id for the targeted click.  This id is used so that js knows which article to edit or delete.
const articlesHtmlEntry = (entry) => {
  return `
  <div>
  <h6>${entry.title}</h6>
  <a href ="${entry.url}">${entry.url}</a>
  <p>${entry.synopsis}</p>
  <p>${entry.timestamp}</p>
  <button id="editArticles!${entry.id}">Edit</button>
  <button id="deleteArticles!${entry.id}">Delete</button></br>
  <input type="checkbox" name="completed" id="completedArticles!${entry.id}">  Completed<br>
  </div>
  `
}

// The articlesHtmlEntry function is exported for use in other functions.
export {articlesHtmlEntry}