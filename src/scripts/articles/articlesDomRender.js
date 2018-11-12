import {articlesDataManager} from "./articlesDataManager"
import {articlesHtmlEntry} from "./articlesHtmlEntry"

const dom = (entry) => {
  document.querySelector("#articlesOutput").innerHTML += entry
}

const articlesDomRender = (activeUser) => {
  document.querySelector("#articlesOutput").innerHTML = ""
  articlesDataManager.getEntries(activeUser)
    .then(entries => {
      entries.forEach(entry => {
        const articlesHtml = articlesHtmlEntry(entry)
        dom(articlesHtml)
      })
    })
}

export {articlesDomRender}