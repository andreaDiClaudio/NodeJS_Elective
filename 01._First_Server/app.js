"use strict";
//It does not have an extension which means that it is a package and not a file
const express = require("express");

//We just logged the library. the same result we can find inside the file in the 'node_modules'
//console.log(express);

const app = express();

app.use(express.json());

//this is different because we instatiated the library
//console.log(app);

//Import and instantiated the library
//const app = require("express")();

//route (entire thing)
//HTTP method
//       | endpoint     | callback funtion
app.get("/", (req, res) => {
  res.send({ message: "Our first route" }); //express will do the conversion from js object ot json
});

let bycecleSpins = 0;
app.get("/spin", (req, res) => {
  bycecleSpins += 1;
  res.send({ message: `Biceyclespin: ${bycecleSpins}` });
});

//Exercise
app.get("/kickDinosaur", (req, res) => {
  res.send({ message: "ow ow ow" });
});
//-----------------------

app.get("/about", (req, res) => {
  res.send(
    `<h1>About</h1>
        <h3>This is my about page</h3>`
  );
});

//One way to send data is through query strings
app.get("/battester", (req, res) => {
  console.log(req.query);

  res.send({ message: `The bat is ${req.query.adjective}` });
});

//in Spring the pathvariable was declared {variable}, while in js it is declared with ':'
//another way of sending data thorugh pathvariable
app.get("/bottle/:bottleSize", (req, res) => {
  res.send({ message: req.params.bottleSize });
});

app.post("/package", (req, res) => {
  res.send({ message: req.body });
});

console.log(new Date());//Zulu
console.log(Date());//CET
console.log(Date.now()); //unix epoch time (unix time)

/*TIME*/
app.get("/time/time", (req, res) => {
  res.send({
    timeUTC: new Date(),
    timeLocal: Date(),
    unixTimestamp: Date.now()
  });
});

app.get("/time/day", (req, res) => {
  res.send({ data: new Date().toLocaleString("default", { weekday: 'long' })})
});

app.get("/time/month", (req, res) => {
  res.send({ data: new Date().toLocaleString("default", { month: 'long' })})
});

//Why do we have to send json? (exam question)
//-- Every language has a library that can read/interpret json --

//we set the port of the server. Why we chose '8080'?
//8080 is http developer port; 8000 is for https
app.listen(8080); //it is always nice to have this at the bottom. It will break to have this at the top/above
//to check if something happend we go to the localhost:8080
