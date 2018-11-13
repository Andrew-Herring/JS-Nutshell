// Import functions from other JS files for use in the functions below.
import { articlesDataManager } from "./articlesDataManager"
import { articlesFormManager } from "./articlesFormManager"
import { articlesDomRender } from "./articlesDomRender"
import { timeStamp } from "../date/timeStamp"

//The saveArticles function contains functionality for saving form values to JSON.  activeUser is passed in through an argument so that the acting user ID is passed into the article entry.
const saveArticles = (activeUser) => {
  // click event looks at the articlesInput div and adds a click event to the single button we have in that div
  document.querySelector("#articlesInput").addEventListener("click", (evt) => {
    // The values that the user inputs into the form are targeted and placed into an object that can be passed to JSON.
    const entry = {
      title: document.querySelector("#articlesTitle").value,
      url: document.querySelector("#articlesUrl").value,
      synopsis: document.querySelector("#articlesSynopsis").value,
      timestamp: timeStamp(),
      completed: false
    }
    // Our one button within the articlesInput div serves two functions: to save a new entry and to edit an existing entry.  We use an if/else statement to differentiate between the two functions.  First, we look to see if the id of the button includes "save."
    if (evt.target.id.startsWith("saveArticles")) {
      // If any input in the form is not filled out, we return an error
      if (!entry.title || !entry.url || !entry.synopsis) {
        alert("Please fill out the article")
      } else {
    // If all inputs are filled out, we call the saveEntry function from Data Manager.  Then, the form is cleared and the DOM render function is called in order to display the entries for the active user into the DOM.
        articlesDataManager.saveEntry(entry).then(() => {
          articlesFormManager.clearForm()
          articlesDomRender(activeUser)
        })
      }
    }
    // If our button id starts with "edit,"...
    if (evt.target.id.startsWith("editArticles")) {
    // we split the id assigned to the button to an array. The second entry of the array will contain the targeted unique entry id.  The unique id is passed to the id variable.
      const id = evt.target.id.split("!")[1]
    // We call the editEntry function from data manager and pass in the unique id. editEntry contains a PUT method, therefore editing the existing record.  Once the promise is fulfilled, we clear the form, render the DOM for the active user and finally change the id assigned to our button back to start with "save."
      articlesDataManager.editEntry(entry, id).then(() => {
        articlesFormManager.clearForm()
        articlesDomRender(activeUser)
        document.getElementById(`editArticlesBtn!${id}`).id = "saveArticlesBtn"
      })
    }
  })
}
// The saveArticles function is exported for use in other functions.
export { saveArticles }