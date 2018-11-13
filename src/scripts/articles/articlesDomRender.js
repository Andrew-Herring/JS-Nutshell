// articlesDataManager is imported so that we can use the getEntries function below.
import { articlesDataManager } from "./articlesDataManager"
// articlesHtmlEntry is imported so that we can format article entry in HTML format.
import { articlesHtmlEntry } from "./articlesHtmlEntry"

// The dom function is used to output the formated HTML info into the div containing the articlesOutput id.
const dom = (entry) => {
  document.querySelector("#articlesOutput").innerHTML += entry
}

// The articlesDomRender function does a number of things: 1.Clears the innerHTML of the div containing the articlesOutput id. 2.Run the getEntries function from Data Manager using the activeUser which returns a promise. 3.Loop over the promise in a forEach function and pass each article entry to the articlesHtml function, converting the entry to HTML format. 4.Pass the return from the articlesHtmlEntry function into the articlesHtml variable. 5.Pass the articlesHtml content to the dom function (which passes the content to the innerHtml of the div contatining the articlesOutput div).
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

// The articlesDomRender function is exported for use in other functions.
export { articlesDomRender }