const url = "http://localhost:3000/events"
//house all functions that interact with the database
const eventsDataManager = {
    getEvent: (id) => {
        return fetch(`${url}?userId=${id}`)
            .then(res => res.json())
    },
    saveEvent: (entry) => {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        }).then(res => res.json());
    },
    deleteEvent: (id) => {
        return fetch(`${url}/${id}`,{
            method: "DELETE"
        }).then(res => res.json())
    },
    editEvent: (entry, id) => {
        return fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        }).then(res => res.json());
    },
    singleEvent: (id) => {
        return fetch(`${url}/${id}`)
            .then(res => res.json())
    }
}

export {eventsDataManager}