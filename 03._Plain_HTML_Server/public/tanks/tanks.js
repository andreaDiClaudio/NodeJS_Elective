const tanksUrl= "http://localhost:8080/api/tanks/";

fetch(tanksUrl) //returns a bitstream. that is why we need to convert the response to json
.then(response => response.json())//Converted in Js
.then(result => {
    const tanksWrapper = document.getElementById("tanks-wrapper");

    result.data.forEach(tank => { //never use innerHTML because script can be passed (XSS - Cross side scripting)
        const tankDiv = document.createElement("div");
        
        const tankNameP = document.createElement("p");
        tankNameP.innerText = tank.name;

        tankDiv.appendChild(tankNameP);
        tanksWrapper.appendChild(tankDiv);
    })
});
