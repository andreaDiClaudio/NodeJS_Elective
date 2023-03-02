"use strict";

const express = require("express");//Importing the module
const app = express();//Instanciating the module

const bodyParser = require('body-parser');//Needed for post method
app.use(express.json());//For parsing the body as json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))//Parses all the urlencoded bodies

const activities = [];

let currentId = 0;

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
    
    const date = formatDate(req.body.date);
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
    activities.push(newActivity);
    
    res.redirect("/");
});

const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${PORT}`);
})

function formatDate(date){
    const stringDate = date.toString();
    const arr = stringDate.split("-");
  
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
    const finalDate = (`${arr[2]} , ${months[arr[1].replace(/^0+/, '') - 1] } ${arr[0]}`)
    
    return finalDate;
  }