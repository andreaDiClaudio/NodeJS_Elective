"use strict";

const express = require("express");//Importing the module
const app = express();//Instanciating the module
app.use(express.json());//For parsing the body as json.

//Represents the table in the database
const birds = [];

//Creation of 'bird' objects
const birdOne = {
  id: 1,
  name: "Parrot",
  maleRating: 10,
  femaleRating: 2
};

const birdTwo = {
  id: 2,
  name: "Pigeon",
  maleRating: 8,
  femaleRating: 7
};

const birdThree = {
  id: 3,
  name: "Owl",
  maleRating: 9,
  femaleRating: 6
};

const birdFour = {
  id: 4,
  name: "Toucan",
  maleRating: 5,
  femaleRating: 5
};

//Populating the 'table'
birds.push(birdOne, birdTwo, birdThree, birdFour);

//HTTP Methods
//GET introduction page
app.get("/", (req, res) => {
  res.send(
    `<h1>Birds Rest API Exercise</h1>
        <h3>Endpoints:</h3>
        <p>• /birds</p>
        <p>• /birds/{id}</p>`
  );
});

//GET all
app.get("/birds", (req, res) => {
  res.send({data: birds});
});

//GET by id                      | Callback function
app.get("/birds/:id", (req, res) => {
  const found = birds.find(bird => bird.id === Number(req.params.id));

  res.send({data: found})
});

//Port
app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});