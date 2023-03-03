"use strict";

const activityWrapper = document.getElementById("activity-wrapper");
const timeWrapper = document.getElementById("time-wrapper");
const dateWrapper = document.getElementById("date-wrapper");
const addActivityButton = document.getElementById("add-activity-button");
let counter = 1;

window.onload= loadActivities();

function loadActivities(){
  fetch("/api/activities") 
    .then(response => response.json())
    .then(result => {
  const activityWrapper = document.getElementById("activity-wrapper");

  result.data.forEach(activity => {

    //Wrapper
    const dateTimeWrapper = document.createElement("div");
    dateTimeWrapper.className = "datetime";
    dateTimeWrapper.style.borderRight = `10px ${activity.color} solid`;

    //date
    const dateWrapper = document.createElement("div");
    const date = document.createElement("h2");
    date.innerText = activity.date;
    //Append
    dateWrapper.appendChild(date);
    dateTimeWrapper.appendChild(dateWrapper);

    //Time
    const timeWrapper = document.createElement("div");
    const time = document.createElement("h1");
    time.style.color = activity.color;
    time.innerText = activity.time;
    //Append
    timeWrapper.appendChild(time);
    dateTimeWrapper.appendChild(timeWrapper);

    //Description
    const descriptionWrapper = document.createElement("div");
    const description = document.createElement("p");
    description.innerText = activity.description;
    //Append
    descriptionWrapper.appendChild(description);
    dateTimeWrapper.appendChild(descriptionWrapper);

    //Edit Button
    const editActivityButton = document.createElement("button");

    //Delete Button
    const delteActivityButton = document.createElement("button");
    delteActivityButton.id = `activity-${counter}-delete-button`;
    delteActivityButton.innerText = "Delete";
    //Append
    dateTimeWrapper.appendChild(delteActivityButton);

    activityWrapper.appendChild(dateTimeWrapper);

    counter ++;
    })
  });
}
