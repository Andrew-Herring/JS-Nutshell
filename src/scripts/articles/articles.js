import {articlesFormManager} from "./articlesFormManager"
import {articlesDomRender} from "./articlesDomRender"
import {saveArticles} from "./saveArticles"
import {edArticles} from "./edArticles"

const articles = (activeuser) => {
  document.querySelector("#articlesInput").innerHTML = articlesFormManager.htmlForm()
  articlesDomRender(activeuser)
  saveArticles(activeuser)
  edArticles(activeuser)
}

export {articles}