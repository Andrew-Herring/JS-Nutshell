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
    })
  })
}

export {profileDomRender}