import { articlesDataManager } from "./articlesDataManager"
import { articlesDomRender } from "./articlesDomRender"

const edArticles = (activeUser) => {
  document.querySelector("#articlesOutput").addEventListener("click", (evt) => {
    if (evt.target.id.startsWith("deleteArticles")) {
      const id = evt.target.id.split("!")[1]
      articlesDataManager.deleteEntries(id).then(() =>
        articlesDomRender(activeUser)
      )
    }
    if (evt.target.id.startsWith("editArticles")) {
      const id = evt.target.id.split("!")[1]
      document.querySelector("#saveArticlesBtn").id = `editArticlesBtn!${id}`
      articlesDataManager.singleEntry(id).then((entry) => {
        document.querySelector("#articlesTitle").value = entry.title
        document.querySelector("#articlesUrl").value = entry.url
        document.querySelector("#articlesSynopsis").value = entry.synopsis
      })
    }
  })
}

export {edArticles}