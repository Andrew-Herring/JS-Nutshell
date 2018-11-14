// Import functions from other JS files for use in the function below.
import {articlesFormManager} from "./articlesFormManager"
import {articlesDomRender} from "./articlesDomRender"
import {saveArticles} from "./saveArticles"
import {edArticles} from "./edArticles"

// The articles function serves as our command center for the articles module.  We do a few things here: 1.call the htmlForm function and place it into the #articlesInput div. 2.Render the existing articles to the DOM for the active user. 3.call the saveArticles function setting a click event, which awaits a click on the save button from the active user. 4. call the edArticles function setting a click event, which awaits a click on the edit or delete buttons from the active user.
const articles = (activeuser) => {
  document.querySelector("#articlesInput").innerHTML = articlesFormManager.htmlForm()
  articlesDomRender(activeuser)
  saveArticles(activeuser)
  edArticles(activeuser)
}

// The articles function is exported for use in dashboard.js.
export {articles}