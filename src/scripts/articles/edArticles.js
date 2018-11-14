// Import functions from other JS files for use in the functions below.
import { articlesDataManager } from "./articlesDataManager"
import { articlesDomRender } from "./articlesDomRender"

// The edArticles function contains code that allows the active user to edit or delete article entries.
const edArticles = (activeUser) => {
  // Within the #articlesOutput div, we have buttons assigned to each article for editing and deleting.  The following click event monitors all buttons within the div.
  document.querySelector("#articlesOutput").addEventListener("click", (evt) => {
    //  if the button id starts with "delete," we proceed with code for deleting the entry from JSON and the DOM.
    if (evt.target.id.startsWith("deleteArticles")) {
      // We are splitting the targeted id into an array with two entries.  See saveArticles.js for more info.
      const id = evt.target.id.split("!")[1]
      //  The deleteEntries function is called passing in the unique article id.  Then, the DOM is rerendered.
      articlesDataManager.deleteEntries(id).then(() =>
        articlesDomRender(activeUser)
      )
    }
    //  //  if the button id starts with "edit," we proceed with code for edit the entry in JSON and eventually, the DOM.
    if (evt.target.id.startsWith("editArticles")) {
      // We are splitting the targeted id into an array with two entries.  See saveArticlies.js for more info.
      const id = evt.target.id.split("!")[1]
      // The id currently assigned to the save button is changed to editArticlesBtn!${id}
      document.querySelector("#saveArticlesBtn").id = `editArticlesBtn!${id}`
      //  singleEntry is called from Data Manager which gets a single object from the array using the id variable created above.
      articlesDataManager.singleEntry(id).then((entry) => {
        //  Once the single entry is retrieved, then the promise is used to populate our input form with the
        document.querySelector("#articlesTitle").value = entry.title
        document.querySelector("#articlesUrl").value = entry.url
        document.querySelector("#articlesSynopsis").value = entry.synopsis
      })
    }
    if (evt.target.id.startsWith("completedArticles")) {
      // We are splitting the targeted id into an array with two entries.  See saveArticlies.js for more info.
      const id = evt.target.id.split("!")[1]
      const completed = {"completed": true}
      // console.log(id)
      //  completedEntry is called from Data Manager which gets a single object from the array using the id variable created above.
      articlesDataManager.completedEntry(completed, id).then(() => {
        articlesDomRender(activeUser)
      })
    }
  })
}
// The edArticles function is exported for use in other functions.
export { edArticles }