"use strict"

const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontpage.html")
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error);//Error is of type undefined
        return;
    }
    console.log("Server is running on port ", PORT);
});