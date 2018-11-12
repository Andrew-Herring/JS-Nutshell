const articlesHtmlEntry = (entry) => {
  return `
  <div>
  <h6>${entry.title}</h6>
  <a href ="${entry.url}">${entry.url}</a>
  <p>${entry.synopsis}</p>
  <p>${entry.timestamp}</p>
  <button id="articlesEdit!${entry.id}">Edit</button>
  <button id="articlesDelete!${entry.id}">Delete</button>
  </div>
  `
}

export {articlesHtmlEntry}