import { articlesDataManager } from "./articlesDataManager"
import { articlesFormManager } from "./articlesFormManager"
import { articlesDomRender } from "./articlesDomRender"
import { timeStamp } from "../date/timeStamp"

const saveArticles = (activeUser) => {
  document.querySelector("#articlesInput").addEventListener("click", (evt) => {
    const entry = {
      title: document.querySelector("#articlesTitle").value,
      url: document.querySelector("#articlesUrl").value,
      synopsis: document.querySelector("#articlesSynopsis").value,
      timestamp: timeStamp()
    }
    if (evt.target.id.startsWith("saveArticles")) {
      if (!entry.title || !entry.url || !entry.synopsis) {
        alert("Please fill out the article")
      } else {
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