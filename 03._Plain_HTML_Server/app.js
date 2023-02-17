"use strict"

const express = require("express");
const app = express()

app.use(express.static("public"));//you are specifying where to find the static files. and allows the client to access the file only inside that folder

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
})

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error);//Error is of type undefined
        return;
    }
    console.log("Server is running on port ", PORT);
});