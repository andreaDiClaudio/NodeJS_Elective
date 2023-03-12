const activityUrl = "http://www.boredapi.com/api/activity"
fetch(activityUrl) 
.then(response => response.json())
.then(result => {
    console.log(result);
     
    const questWrapper = document.getElementById("quest");
    questWrapper.innerText = result.activity;
});
