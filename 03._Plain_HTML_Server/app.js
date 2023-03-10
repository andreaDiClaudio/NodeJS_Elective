"use strict"

const express = require("express");
const { getTanks, addTank } = require("./util/tanks.js");
const app = express();

app.use(express.static("public"));//you are specifying where to find the static files. and allows the client to access the file only inside that folder

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

/* API */
app.get("/api/tanks", (req, res) => {
    res.send({data: tanks})
})

app.get("/api/visitors", (req, res) => {
    res.send({data: visitorCount})
})

app.get("/api/guards", (req, res) => {
    console.log(req.query); //req.query is an object with key value pairs
    if (req.query.passport === "secret") {
        return res.redirect("/api/tanks");
    }
    res.send({message: "You are not allowed to see tanks. Use the correct secret"});
});

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