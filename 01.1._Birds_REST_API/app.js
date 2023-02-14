"use strict";

const express = require("express");
const app = express();
app.use(express.json());

//Represents the table in the database
const birds = [];

//Creation of 'bird' objects
const birdOne = {
  id: 1,
  name: "Andrea",
  classification: "Parrot",
};

const birdTwo = {
  id: 2,
  name: "Nicolas",
  classification: "Pigeon",
};

const birdThree = {
  id: 3,
  name: "Anders",
  classification: "Owl",
};

const birdFour = {
  id: 4,
  name: "Jone",
  classification: "Toucan",
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
        <p>• /birds/name/{name}</p>
        <p>• /birds/classification/{classification}</p>`
  );
});

//GET all
app.get("/birds", (req, res) => {
  res.send(birds);
});

//GET by id
app.get("/birds/:id", (req, res) => {
  const requestedPosition = req.params.id - 1;
  const birdById = birds.at(requestedPosition);

  res.send({ birdById });
});

//GET by name
app.get("/birds/name/:birdName", (req, res) => {
  const found = birds.find(
    (bird) => bird.name.toLowerCase() == req.params.birdName.toLowerCase());

  res.send({ found });
});

//GET by classification
app.get("/birds/classification/:classification", (req, res) => {
  const found = birds.find(
    (bird) => bird.classification.toLowerCase() == req.params.classification.toLowerCase());

  res.send({ found });
});

//Port
app.listen(8080);