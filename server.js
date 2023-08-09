const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())

app.get("/", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.json("Welcome to Node API")
})

app.get("/users", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.json([
        { id: 1, name: "Scott Desatnick" },
        { id: 2, name: "Adam Colson" },
        { id: 3, name: "Tuan Bui" },
        { id: 4, name: "Jagrav"}
    ])
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})