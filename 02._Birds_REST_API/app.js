"use strict";

const express = require("express");//Importing the module
const bodyParser = require('body-parser');//Needed for post method

const app = express();//Instanciating the module

app.use(express.json());//For parsing the body as json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))//Parses all the urlencoded bodies

let currentId = 4;

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

//GET by id - Tested on Postman
app.get("/birds/:id", (req, res) => {
  const requestedBird = birds.find(bird => bird.id === Number(req.params.id));

  if (!requestedBird) return res.sendStatus(404);

  res.send({data: requestedBird});
});

//POST  - Tested on Postman
app.post("/birds", (req, res) => {
  const body = req.body;

  let calculateId = ++currentId;//Prefix notation updates before
  const newBird = {id: calculateId, ...body};
  birds.push(newBird);

  res.send({data: newBird});
})

//PUT - Tested on Postman
app.put("/birds/:id", (req,res) => {
  const requestedBird = birds.find(bird => bird.id === Number(req.params.id));

  if (!requestedBird) return res.sendStatus(404);
 
  requestedBird.name = req.body.name;
  requestedBird.maleRating = req.body.maleRating;
  requestedBird.femaleRating = req.body.femaleRating;
  
  res.send({data: requestedBird});
})

//PATCH - Tested on Postman
app.patch("/birds/:id", (req,res) => {
  /*
  const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));

  if (!requestedBird) return res.sendStatus(404);
  req.body.hasOwnProperty("name") ? requestedBird.name = req.body.name : requestedBird.name;
  req.body.hasOwnProperty("maleRating") ? requestedBird.maleRating = req.body.maleRating : requestedBird.maleRating;
  req.body.hasOwnProperty("femaleRating") ? requestedBird.femaleRating = req.body.femaleRating : requestedBird.femaleRating;
*/
  const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
  if (!foundIndex === -1) {
    res.status(404).send({message: `no bird found with id ${req.params.id}`})
  } else {
    // This can change the ID!
    //foundBird = {...foundBird, ...req.params}
    const foundBird = birds[foundIndex];
    const birdToCreate = {...foundBird, ...req.body, id: foundBird.id}
    birds[foundIndex] = birdToCreate;
    res.send({birdToCreate})}
  });

//DELETE - Tested on Postman
app.delete("/birds/:id", (req,res) => {
  const requestedBirdIndex = birds.findIndex(bird => bird.id === Number(req.params.id));

  if (requestedBirdIndex === -1) {
    res.status(404).send({data: requestedBirdIndex, message: `no bird found with id: ${req.params.id}` });
  } else {
    birds.splice(requestedBirdIndex, 1)[0];
    res.sendStatus(200);
  }
})

//Port
app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});