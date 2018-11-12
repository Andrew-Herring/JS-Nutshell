import {profileDataManager} from "./profileDataManager"
import {htmlProfile} from "./htmlProfile"

const dom = (entry) => {
  document.querySelector("#profileOutput").innterHTML += entry
}

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