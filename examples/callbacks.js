getId((id) => {
    getUserFromDatabase(id, (user) => {
        console.log("User: " + JSON.stringify(user)) // Callback-Hell!
    })
})

console.log("Part after call")

function getUserFromDatabase(id, callback) {
    console.log("Reading from db")
    setTimeout(() => {
        callback({ id: id, name: "Hans" })
    }, 1000)
}

function getId(callback) {
    console.log("Accessing api...")
    setTimeout(() => {
        callback(1) 
    }, 1000)
}