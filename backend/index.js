const express = require("express")
const app = express()
const mongoose = require("mongoose") 

require("dotenv").config()

app.get("/", (req, res) => {
    res.send("<h1>welcome to our Todos Api let jack this read</h1>")
})   
 
//create connection
const connection_string = process.env.CONNECTION_STRING

app.listen(5000, () =>
{
    console.log("server running on port 5000")
})
//connect to mongodb
mongoose.connect(connection_string, {
    useNewUrlParser: true, 

    useUnifiedTopology: true 
})
.then(() => console.log("mongoDB connection establish ..."))
.catch((error) => console.error("mongoDB connection faild", error.message))
