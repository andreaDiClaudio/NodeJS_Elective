//const express = require("express"); 
//cannot use require anymore because inside the pacakge.json we declared: "type": "module"
import express from "express";
const app = express();
//const jokes = require("./util/jokes");
//import jokes from "./util/jokes.js";//gives a experimental warning


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
