"use strict"

const express = require("express");
const { getTanks, addTank } = require("./util/tanks.js");
const app = express();

app.use(express.static("public"));//you are specifying where to find the static files. and allows the client to access the file only inside that folder

import guardRouter from "./routes/guardRouter";

const tanksUtil = require("./util/tanks.js");
console.log(tanksUtil);

//console.log(getTanks())//call function in another module

const tanks = [
    {name: "Leopard", nationality: "Germany", year: 1943},
    {name: "M1 Abrams", version: "M1"},
    {name: "Tiger"}
]

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html")
})

let visitorCount = 0;
app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html")
})

app.get("/museumguards", (req,res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html")
});

//proxy
app.get ("/proxy", (req, res) => {
    const test="";
    fetch("https://www.google.com/")
    .then(response => response.text())//because it is not json
    .then(result => res.send(result));
});

/* API */

app.put("/api/visitors", (req, res) => {
    res.send({data: ++visitorCount})
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error){
        console.log(error);//Error is of type undefined
        return;
    }
    console.log("Server is running on port ", PORT);
});