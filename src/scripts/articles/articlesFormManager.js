// articlesFormManager is an object used to store functions for loading and clearing the input form.
const articlesFormManager = {
// htmlForm contains the literal HTML that will be passed to the DOM for input. Includes inputs and id's that will be later used to capture values and pass to JSON.
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
  // clearForm is used to clear the form values after the form is saved.
  clearForm: () => {
    document.querySelector("#articlesTitle").value = ""
    document.querySelector("#articlesUrl").value = ""
    document.querySelector("#articlesSynopsis").value = ""
  }
}
// The articlesFormManager object is exported for use in other functions.
export { articlesFormManager }