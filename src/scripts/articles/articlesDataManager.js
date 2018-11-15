// The url variable is created to point to the "articles" object in the JSON file.
const url = "http://localhost:3000/articles"

// The articlesDataManager object includes functions for all JSON interactions.
const articlesDataManager = {
  // getEntries function is retrieving all JSON objects and converting to JS.  The id variable is included so that objects are retrieved for the specific user id that is passed into the function.
  getEntries: (id) => {
    return fetch(`${url}?userId=${id}&completed=false`)
      .then(res => res.json())
  },
  // saveEntry function is used to post JS values to the JSON file.  Function converts JS values to JSON using stringify.  A promise is returned that converts JSON back to JS.
  saveEntry: (entry) => {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(res => res.json());
  },
  // deleteEntries uses the DELETE method to delete a json object containing a unique id. The id is passed over from the delete button in articlesHtmlEntry.js. A promise is returned that converts JSON back to JS.
  deleteEntries: (id) => {
    return fetch(`${url}/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
  },
  // editEntries uses the PUT method to edit a json object containing a unique id. The id is passed over from the edit button in articlesHtmlEntry.js. A promise is returned that converts JSON back to JS.
  editEntry: (entry, id) => {
    return fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(res => res.json());
  },
    // completedEntries uses the PATCH method to edit a json object containing a unique id. The id is passed over from the completed checkbox in articlesHtmlEntry.js.
    completedEntry: (entry, id) => {
      return fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
      })
    },
  // singleEntries retrieves one JSON object containing the targeted id passed over from the edit button in edArticles.js.
  singleEntry: (id) => {
    return fetch(`${url}/${id}`)
      .then(res => res.json())
  }
}

// The articlesDataManager function is exported for use in other functions.
export { articlesDataManager }