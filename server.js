const express = require("express")
const cors = require("cors")
const app = express()



app.use(cors({credentials: true, origin: '*'}));

// Add CORS headers
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get("/", (req, res) => {
    res.json("Welcome to Node API")
})

app.get("/users", (req, res) => {
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