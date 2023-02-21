"use strict";

const express = require("express");//Importing the module
const bodyParser = require('body-parser');//Needed for post method

const app = express();//Instanciating the module

app.use(express.json());//For parsing the body as json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))//Parses all the urlencoded bodies

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
        <h3>Implemented Endpoints:</h3>
        <p>• GET - "/birds"</p>
        <p>• GET - "/birds/{id}"</p>
        <p>• POST - "/birds"</p>
        <p>• PUT - "/birds/{id}"</p>
        <p>• PATCH - "/birds/{id}"</p>
        <p>• DELETE - "/birds/{id}"</p>`
  );
});

//GET all
app.get("/birds", (req, res) => {
  res.send({data: birds});
});

//GET by id                     | Callback function
app.get("/birds/:id", (req, res) => {
  const requestedBird = birds.find(bird => bird.id === Number(req.params.id));

  if (!requestedBird) return res.sendStatus(404);

  res.send({data: requestedBird});
});

//POST 
app.post("/birds", (req, res) => {
  const body = req.body;

  const calculateId = birds.length + 1;
  const newBird = {id: calculateId, ...body};
  birds.push(newBird);

  res.send({data: newBird});
})

//I tried to have different implementation of PUT and PATCH methdos based on the definition: 
//https://www.geeksforgeeks.org/difference-between-put-and-patch-request/

//PUT 
app.put("/birds/:id", (req,res) => {
  const requestedBird = birds.find(bird => bird.id === Number(req.params.id));

  if (!requestedBird) return res.sendStatus(404);
 
  requestedBird.name = req.body.name;
  requestedBird.maleRating = req.body.maleRating;
  requestedBird.femaleRating = req.body.femaleRating;
  
  res.send({data: requestedBird});
})

//PATCH
app.patch("/birds/:id", (req,res) => {
  const requestedBird = birds.find(bird => bird.id === Number(req.params.id));

  if (!requestedBird) return res.sendStatus(404);

  req.body.hasOwnProperty("name") ? requestedBird.name = req.body.name : requestedBird.name;
  req.body.hasOwnProperty("maleRating") ? requestedBird.maleRating = req.body.maleRating : requestedBird.maleRating;
  req.body.hasOwnProperty("femaleRating") ? requestedBird.femaleRating = req.body.femaleRating : requestedBird.femaleRating;

  res.json(requestedBird);
});

//DELETE
app.delete("/birds/:id", (req,res) => {
  const requestedBird = birds.find(bird => bird.id === Number(req.params.id));
  const birdIndex = birds.indexOf(requestedBird);

  birds.splice(birdIndex, 1);

  res.sendStatus(200);
})

//Port
app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});