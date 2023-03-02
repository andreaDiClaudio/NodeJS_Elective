"use strict";

const activityWrapper = document.getElementById("activity-wrapper");
const timeWrapper = document.getElementById("time-wrapper");
const dateWrapper = document.getElementById("date-wrapper");
const addActivityButton = document.getElementById("add-activity-button");

addActivityButton.addEventListener('click', addActivity)

window.onload= loadActivities();


function addActivity(){
  postActivity();

  emptyInputs();
}

async function postActivity(){
  const date =  formatDate(document.getElementById("date-input").value);
  const time = document.getElementById("time-input").value;
  const description = document.getElementById("description-input").value;
  const color = document.getElementById("color-input").value;

  const activity = {
    "date": date,
    "time": time,
    "desc": description,
    "color": color
    }

    const fetchOptions = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
        },
      body: ""
      }

    fetchOptions.body = JSON.stringify(activity);

    const response = await fetch("http://localhost:8080/activities", fetchOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage)
    }
    location.reload();
}

function loadActivities(){
  fetch("http://localhost:8080/api/activities") //returns a bitstream. that is why we need to convert the response to json
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

function emptyInputs(){
  document.getElementById("time-input").value = "";
  document.getElementById("description-input").value = "";
  document.getElementById("date-input").value = "";
  document.getElementById("color-input").value = "";
}

function formatDate(date){
  const stringDate = date.toString();
  const arr = stringDate.split("-");

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const finalDate = (`${arr[2]} , ${months[arr[1].replace(/^0+/, '') - 1] } ${arr[0]}`)
  
  return finalDate;
}
