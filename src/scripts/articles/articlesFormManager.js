// articlesFormManager is an object used to store functions for loading and clearing the input form.
const articlesFormManager = {
// htmlForm contains the literal HTML that will be passed to the DOM for input. Includes inputs and id's that will be later used to capture values and pass to JSON.
  htmlForm: () => {
    return `
    <div class="form-group">
    <h2>Articles</h2>
    Title:<br>
    <input type="text" class="form-control" name="Title" id="articlesTitle"><br>
    URL:<br>
    <input type="url" class="form-control" name="URL" id="articlesUrl"><br>
    Synopsis:<br>
    <textarea rows="4" cols="50" class="form-control" id="articlesSynopsis"></textarea><br>
    <button class="btn btn-primary" id="saveArticlesBtn">Save</button>
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