"use strict"

const express = require("express");
const app = express();

app.use(express.static("public"));//you are specifying where to find the static files. and allows the client to access the file only inside that folder

const tanks = [
    {name: "Leopard", nationality: "Germany", year: 1943},
    {name: "M1 Abrams", version: "M1"}
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

/* API */
app.get("/api/tanks", (req, res) => {
    res.send({data: tanks})
})

app.get("/api/visitors", (req, res) => {
    res.send({data: visitorCount})
})

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