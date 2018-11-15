import {profileDataManager} from "./profileDataManager"
import {htmlProfile} from "./htmlProfile"
// after writing a post, make a place for it to go on the DOM
const dom = (entry) => {
  document.querySelector("#profileOutput").innerHTML += entry
}
// Show all entries to the active user
const profileDomRender = (activeUser) => {
  document.querySelector("#profileOutput").innerHTML = ""
  profileDataManager.getEntries(activeUser)
  .then(entries => {
    entries.forEach(entry => {
      const entryHtml = htmlProfile(entry)
      dom(entryHtml)
      if (entry.favorite === true) {
        document.querySelector("#fav").innerHTML = "Is a Jenna"
      }
      else {
        document.querySelector("#fav").innerHTML = ""
    }  
    })
  })
}

export {profileDomRender}