"use strict";

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/Activities/activities.html");
});


const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${PORT}`);
})
