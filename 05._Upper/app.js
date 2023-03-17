//const express = require("express"); 
//cannot use require anymore because inside the pacakge.json we declared: "type": "module"
//import express from "express";
//const app = express();
//const jokes = require("./util/jokes");
import getJoke from "./util/jokes.js"
//gives a experimental warning
//serving static is when the browsers need an extra file etc.
//import path from "path";
import fs from 'fs'; //Short for file system
import templateEngine from './util/templateEngine.js';

import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));


const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage,  {
    tabtitle: "Upper | Welcome"
});


const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, {
    tabtitle: "Upper | IRLQuests"
});



app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", async (req, res) => {
    const joke = await getJoke();
    const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html")
                    .replace("$JOKE", JSON.stringify(joke));
    const jokesPage = templateEngine.renderPage(jokes, {
    tabtitle: "Upper | Jokes",
    cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`
    });
    res.send(jokesPage);
});

const PORT = 8080;
app.listen(PORT, (error) =>{
    if(error){
        console.log(error);
    }
    console.log(`Server running on Port:`, PORT);
})

/*
//How it gets error
function listen(port, callback){
    try{
        //starting up the server...
        if(callback) callback();
    }catch (error){
        if(callback) callback(error);

    }
}
*/
