"use strict";

const activityWrapper = document.getElementById("activity-wrapper");
const timeWrapper = document.getElementById("time-wrapper");
const dateWrapper = document.getElementById("date-wrapper");
const addActivityButton = document.getElementById("add-activity-button");

window.onload= loadActivities();

function loadActivities(){
  fetch("/api/activities") //returns a bitstream. that is why we need to convert the response to json
    .then(response => response.json())//Converted in Js
    .then(result => {
  const activityWrapper = document.getElementById("activity-wrapper");

  result.data.forEach(activity => {
        //const formattedDate = formatDate(document.getElementById("date-input").value);

    //Wrapper
    const dateTimeWrapper = document.createElement("div");
    dateTimeWrapper.className = "datetime";
    dateTimeWrapper.style.borderRight = `10px ${activity.color} solid`;

    //date
    const dateWrapper = document.createElement("div");
    const date = document.createElement("h2");

    //Time
    const timeWrapper = document.createElement("div");
    const time = document.createElement("h1");
    time.style.color = activity.color

    //Description
    const descriptionWrapper = document.createElement("div");
    const description = document.createElement("p");

    //fill fields
    date.innerText = activity.date;
    time.innerText = activity.time;
    description.innerText = activity.description;

    //appendChild
    dateWrapper.appendChild(date);
    timeWrapper.appendChild(time);
    descriptionWrapper.appendChild(description);

    dateTimeWrapper.appendChild(timeWrapper);
    dateTimeWrapper.appendChild(dateWrapper);
    dateTimeWrapper.appendChild(descriptionWrapper);

    activityWrapper.appendChild(dateTimeWrapper);
    })
  });
}


function formatDate(date){
  const stringDate = date.toString();
  const arr = stringDate.split("-");

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const finalDate = (`${arr[2]} , ${months[arr[1].replace(/^0+/, '') - 1] } ${arr[0]}`)
  
  return finalDate;
}