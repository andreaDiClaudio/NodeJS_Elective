"use strict";

const express = require("express");
const app = express();
app.use(express.json());

//Represents table in the database
const birds = [];

//Creation of 'bird' objects
const birdOne = {
  id: 1,
  name: "Bird One",
  classification: "Parrot",
};

const birdTwo = {
  id: 2,
  name: "Bird Two",
  classification: "Blue Jay",
};

const birdThree = {
  id: 3,
  name: "Bird Three",
  classification: "Owl",
};

const birdFour = {
  id: 4,
  name: "Bird Four",
  classification: "Toucan",
};

//Populating the 'table'
birds.push(birdOne, birdTwo, birdThree, birdFour);

//HTTP Methods
app.get("/birds", (req, res) => {
  res.send(birds);
});

app.get("/birds/:id", (req, res) => {
  const requestedPosition = req.params.id - 1;
  const birdById = birds.at(requestedPosition);
  res.send({ birdById });
});

app.listen(8080);
