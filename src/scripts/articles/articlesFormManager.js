const articlesFormManager = {
  htmlForm: () => {
    return `
    <div>
    <h2>Articles</h2>
    Title:<br>
    <input type="text" name="Title" id="articlesTitle"><br>
    URL:<br>
    <input type="url" name="URL" id="articlesUrl"><br>
    Synopsis:<br>
    <textarea rows="4" cols="50" id="articlesSynopsis"></textarea><br>
    <button id="articlesSaveBtn">Save</button>
    </div>
    `
  },
  clearForm: () => {
    document.querySelector("#articlesTitle").value = ""
    document.querySelector("#articlesUrl").value = ""
    document.querySelector("#articlesSynopsis").value = ""
  }
}

export { articlesFormManager }