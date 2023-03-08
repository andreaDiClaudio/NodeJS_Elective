"use strict";

const express = require("express");//Importing the module
const app = express();//Instanciating the module

const bodyParser = require('body-parser');//Needed for post method
app.use(express.json());//For parsing the body as json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))//Parses all the urlencoded bodies

//Variables
const activities = [];
let currentId = 0;

//Today's date
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const todayDate = `${yyyy}-${mm}-${dd}`;
//Now
let timeNow = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

/*Tutorial Activity*/
const toEliminate = {
    id : 0,
    date: formatDate(todayDate),
    title: "Welcome",
    time: timeNow,
    description: "My activities gives you the possibilities to schedule your days! Try to delete this activity and create yours in the 'Add Activity' area :)",
    color: "#70d072"
}

activities.push(toEliminate)

//HTTP Methods
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/Activities/activities.html");
});


//Post request to save new activities
app.post("/activities", (req,res)=>{
    
    const date = formatDate(req.body.date);
    const time = req.body.time;
    const title = req.body.title;
    const description = req.body.description;
    const color = req.body.color;

    let calculateId = ++currentId;
    const newActivity = {
        id: calculateId, 
        date: date, 
        title: title,
        time: time,
        description: description,
        color: color
    }
    activities.push(newActivity);
    
    res.redirect("/");
});

app.patch("/activity/:id", (req, res) => {
    const foundIndex = activities.findIndex(activity => 
        activity.id === Number(req.params.id));

        if (!foundIndex === -1) {
            res.status(404).send({message: `no activity with id: ${req.params.id}`})
        } else {
            const foundActivity = activities[foundIndex];
            const activityToCreate = { id: foundActivity.id, ...foundActivity, ...req.body}
            activities[foundIndex] = activityToCreate;
            res.send({data: activityToCreate})
        }
});

//API
app.get("/api/activities", (req,res) => {
    res.send({data: activities});
});

//Function to formate date from 02/02/2023 to February 2nd, 2023
function formatDate(date){
    const stringDate = date.toString();
    const arr = stringDate.split("-");
  
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
    const finalDate = (`${arr[2]} , ${months[arr[1].replace(/^0+/, '') - 1] } ${arr[0]}`)
    
    return finalDate;
  }

  app.delete("/api/activity/:id", (req, res) => {
    const activityIndex = activities.findIndex(activity => activity.id === Number(req.params.id))

    if (activityIndex === -1) {
        res.status(404).send({data: activityIndex, message: `no activity found with id: ${req.params.id}`});
    } else {
        activities.splice(activityIndex, 1)[0];
        res.sendStatus(200);
    }
});


const PORT = 8080;
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on port:`, PORT);
})