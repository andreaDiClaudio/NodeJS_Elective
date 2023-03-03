"use strict";

const activityWrapper = document.getElementById("activity-wrapper");
const timeWrapper = document.getElementById("time-wrapper");
const dateWrapper = document.getElementById("date-wrapper");
const addActivityButton = document.getElementById("add-activity-button");

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

    //Delete Button
    const deleteActivityButton = document.createElement("button");
    deleteActivityButton.id = `activity${activity.id}-delete-button`;
    deleteActivityButton.innerText = "Delete";
    deleteActivityButton.addEventListener('click', () => {
      const confirmationMessage = confirm(`Are your sure you want to delete the activity ${activity.description}?`);
      if (confirmationMessage) {
        doDeleteActivity(activity.id);
        location.reload
      }
    });
    //Append
    dateTimeWrapper.appendChild(deleteActivityButton);

    activityWrapper.appendChild(dateTimeWrapper);
    })
  });
}

//NOT FINAL
async function doDeleteActivity(id) {
  const response = await deleteActivity(id);
  return response;
}

async function deleteActivity(id) {
  const fetchOptions = {
    method: 'DELETE'
  }

  const response = await fetch(`/api/activity/${id}`, fetchOptions)

  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage)
}
location.reload()
}