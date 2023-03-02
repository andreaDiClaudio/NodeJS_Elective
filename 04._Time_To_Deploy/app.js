"use strict";

const activities = [];

let currentId = 0;

const express = require("express");
const app = express();
app.use(express.static("public"));

const bodyParser = require('body-parser');//Needed for post method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))//Parses all the urlencoded bodies

//HTTP Methods
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/Activities/activities.html");
});

//API
app.get("/api/activities", (req,res) => {
    res.send({data: activities});
});

//Post request to save new activities
app.post("/activities", (req,res)=>{
    const date = req.body.date;
    const time = req.body.time;
    const description = req.body.description;
    const color = req.body.color;

    let calculateId = ++currentId;
    const newActivity = {
        id: calculateId, 
        date: date, 
        time: time,
        description: description,
        color: color
    }

    console.log(description);
    activities.push(newActivity);

    res.send({data: newActivity});
});

const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${PORT}`);
})
