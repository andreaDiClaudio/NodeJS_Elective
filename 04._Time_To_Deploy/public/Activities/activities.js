"use strict";

const activityWrapper = document.getElementById("activity-wrapper");
const timeWrapper = document.getElementById("time-wrapper");
const dateWrapper = document.getElementById("date-wrapper");

const addActivityButton = document.getElementById("add-activity-button");

function formatDate(date){
  const stringDate = date.toString();
  const arr = stringDate.split("-");

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const finalDate = (`${arr[2]} , ${months[arr[1].replace(/^0+/, '')] } ${arr[0]}`)
  
  return finalDate;

}

addActivityButton.addEventListener('click', addActivity)

function addActivity(){

  //Formates date
  const formattedDate = formatDate(document.getElementById("date-input").value);

  //Wrapper
  const dateTimeWrapper = document.createElement("div");
  dateTimeWrapper.className = "datetime";
  dateTimeWrapper.style.borderRight = `10px ${document.getElementById("color-input").value} solid`;

  //date
  const dateWrapper = document.createElement("div");
  const date = document.createElement("h2");

  //Time
  const timeWrapper = document.createElement("div");
  const time = document.createElement("h1");
  time.style.color = `${document.getElementById("color-input").value}`

  //Description
  const descriptionWrapper = document.createElement("div");
  const description = document.createElement("p");

  //fill fields
  date.innerText = formattedDate;
  time.innerText = document.getElementById("time-input").value;
  description.innerText = document.getElementById("description-input").value;

  //appendChild
  dateWrapper.appendChild(date);
  timeWrapper.appendChild(time);
  descriptionWrapper.appendChild(description);

  dateTimeWrapper.appendChild(timeWrapper);
  dateTimeWrapper.appendChild(dateWrapper);
  dateTimeWrapper.appendChild(descriptionWrapper);

  activityWrapper.appendChild(dateTimeWrapper);

  emptyInputs();
}

function emptyInputs(){
  document.getElementById("time-input").value = "";
  document.getElementById("description-input").value = "";
  document.getElementById("date-input").value = "";
  document.getElementById("color-input").value = "";
}
