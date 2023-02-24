function wirteInVisitorsLog(){
    console.log("Hello");
}

const visitorCountUrl = "http://localHost:8080/api/visitors"

fetch(visitorCountUrl)
.then(response => response.json())//Converted in Js
.then(result => {
    updateVisitor(result.data)
    
});

function updateVisitor(visitorCount) {
    const visitorCountDiv = document.getElementById("visitors-count");    
    visitorCountDiv.innerText = visitorCount;
}

function updateVisitorsCount() {
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(result => updateVisitor(result.data))
}

