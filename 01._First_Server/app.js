"use strict";
//It does not have an extension which means that it is a package and not a file
//const express = require("express");

//We just logged the library. the same result we can find inside the file in the 'node_modules'
//console.log(express);

//const app = express();

//this is different because we instatiated the library
//console.log(app);

//Import and instantiated the library
const app = require("express")();

//route (entire thing)
//HTTP method
//   | endpoint     | callback funtion
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

app.get("/about", (rew, res) => {
  res.send(
    `<h1>About</h1>
        <h3>This is my about page</h3>`
  );
});

//Why do we have to send json? (exam question)
//-- Every language has a library that can read/interpret json --

//we set the port of the server. Why we chose '8080'?
//8080 is http developer port; 8000 is for https
app.listen(8080); //it is always nice to have this at the bottom. It will break to have this at the top/above
//to check if something happend we go to the localhost:8080
