getId()
    .then(id => getUserFromDatabase(id))
    .then(user => console.log("User: " + JSON.stringify(user)))
    .catch(err => console.log(err))

console.log("Part after call")

function getUserFromDatabase(id) {
    console.log("Reading from db")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, name: "Hans" })
        }, 1000)
    })
}

function getId() {
    console.log("Accessing api...")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
}