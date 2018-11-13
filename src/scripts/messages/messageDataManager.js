// show the location of where the fetches will be pulling and putting from
const url = "http://localhost:3000/messages"

// declaring variable for fetch calls
const messageDataManager = {
// getting data from database
    getMessages: (id) => {
        return fetch(`${url}?userId=${id}`)
            .then(res => res.json())
    },
// posting data to database
    saveMessage: (message) => {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        }).then(res => res.json());
    },
// grabbing the id and removing it from the database
    deleteMessages: (id) => {
        return fetch(`${url}/${id}`,{
            method: "DELETE"
        }).then(res => res.json())
    },

    editMessage: (message, id) => {
        return fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        }).then(res => res.json());
    },
    singleMessage: (id) => {
        return fetch(`${url}/${id}`)
            .then(res => res.json())
    }
}

// export variable so other modules can use the fetch functions 
export {messageDataManager}