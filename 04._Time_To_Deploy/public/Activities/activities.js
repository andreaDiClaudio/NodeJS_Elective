"use strict";
/*
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
*/

const activityWrapper = document.getElementById("activity-wrapper")
const timeWrapper = document.getElementById("time-wrapper");
const dateWrapper = document.getElementById("date-wrapper");

const addActivityButton = document.getElementById("add-activity-button");
/*

@param {Date} date
 
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}


//@ param {Date} date
 
function formatDate(date) {
  const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);
*/

addActivityButton.addEventListener('click', addActivity)

function addActivity(){

  const dateTimeWrapper = document.createElement("div");
  dateTimeWrapper.className = "datetime"

  const dateWrapper = document.createElement("div")
  dateWrapper.className = "date";
  const date = document.createElement("p")

  const timeWrapper = document.createElement("div")
  timeWrapper.className = "time";
  const time = document.createElement("p")

  const description = document.createElement("p")

  date.innerText = document.getElementById("date-input").value;
  time.innerText = document.getElementById("time-input").value;
  //description.innerText(document.getElementById("description-input").value)

  dateWrapper.appendChild(date);
  timeWrapper.appendChild(time);

  dateTimeWrapper.appendChild(dateWrapper);
  dateTimeWrapper.appendChild(timeWrapper);

  activityWrapper.appendChild(dateTimeWrapper);
}