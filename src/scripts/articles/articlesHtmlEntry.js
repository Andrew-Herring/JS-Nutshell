const articlesHtmlEntry = (entry) => {
  return `
  <div>
  <h3>${entry.title}</h3>
  <p>${entry.url}</p>
  <p>${entry.synopsis}</p>
  <p>${entry.timestamp}</p>
  <button id="articlesEdit!${entry.id}">Edit</button>
  <button id="articlesDelete!${entry.id}">Delete</button>
  </div>
  `
}

export {articlesHtmlEntry}