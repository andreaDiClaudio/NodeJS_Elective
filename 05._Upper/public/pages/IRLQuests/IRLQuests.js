const activityUrl = "http://www.boredapi.com/api/activity"
const getNewQuestButton = document.getElementById("get-quest-button");

function fetchQuest(activityQueryString="") {

    fetch(activityUrl+activityQueryString) 
    .then(response => response.json())
    .then(result => {
        console.log(result);
         
        const questWrapper = document.getElementById("quest");
        questWrapper.innerText = result.activity;
    });
    
}

//fetchQuest();

function getNewQuest() {
    console.log("Works");
    const dropdown = document.getElementById("activities-dropdown");
    fetchQuest(`?=${dropdown.value}`)
}

getNewQuestButton.addEventListener('click', getNewQuest);