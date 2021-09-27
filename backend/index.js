const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("<h1>welcome to our Todos Api let jack this read</h1>")
})   

app.listen(5000, () =>
{
    console.log("server running on port 5000")
})