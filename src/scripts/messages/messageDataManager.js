
const url = "http://localhost:3000/messages"
const messageDataManager = {
    getMessages: (id) => {
        return fetch(`${url}?userId=${id}`)
            .then(res => res.json())
    },
    saveMessage: (message) => {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        }).then(res => res.json());
    },
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

export {messageDataManager}