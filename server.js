const express = require("express");
const apiroutes = require("./Routes/apiroutes")
const htmlroutes = require("./Routes/htmlroutes")


const app = express()

const port = process.env.port || 9001


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.use("/api", apiroutes )
app.use("/", htmlroutes)
app.listen(port, ()=> console.log(
    "Listening on Port" + port
))