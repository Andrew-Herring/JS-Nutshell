// Import functions from other JS files for use in the functions below.
import { articlesDataManager } from "./articlesDataManager"
import { articlesFormManager } from "./articlesFormManager"
import { articlesDomRender } from "./articlesDomRender"
import { timeStamp } from "../date/timeStamp"

//The saveArticles function contains functionality for saving form values to JSON.  The activeUser is passed in through an argument so that the user ID is passed into the article entry.
const saveArticles = (activeUser) => {
  // click event looks at the articlesInput div and adds a click event to the single button we have in that div
  document.querySelector("#articlesInput").addEventListener("click", (evt) => {
    // The values that the user inputs into the form are targeted and placed into an object that can be passed to JSON.
    const entry = {
      title: document.querySelector("#articlesTitle").value,
      url: document.querySelector("#articlesUrl").value,
      synopsis: document.querySelector("#articlesSynopsis").value,
      timestamp: timeStamp()
    }
    // If any input in the form is not filled out, we return an error
    if (evt.target.id.startsWith("saveArticles")) {
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
    if (evt.target.id.startsWith("editArticles")) {
      const id = evt.target.id.split("!")[1]
      articlesDataManager.editEntry(entry, id).then(() => {
        articlesFormManager.clearForm()
        articlesDomRender(activeUser)
        document.getElementById(`editArticlesBtn!${id}`).id = "saveArticlesBtn"
      })
    }
  })
}

export { saveArticles }