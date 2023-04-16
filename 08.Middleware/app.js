import { log } from "console";
import express from "express"

const app = express();

app.use("/room", houseButler);

import roomRouter from "./routes/roomRouter.js";
app.use(roomRouter);

function guard(req,res,next) {
    console.log("Are you allowed in?");
    if(req.query.name === "Andrea"){
        req.myName = "Andrea";
        next();
    } else {
        res.send({message:"Not allowed"});
    }
}

//defining our own middleware. It is called middleware because it is put in the middle
function houseButler(req, res, next) {
    console.log("This way...");
    next();
    //res.send(message: "Will never reach any room");x
}

//app.use("/room", houseButler); //This is a middlware and we are applying housebutler to all '/room' routes
app.get("/frontdoor", guard, (req,res) => {
    res.send({message: `Please enter, ${req.myName}`});
});




//Fallback route
app.get("*", (req, res) => {
    res.send("<h1>404- Not Found</h1>")
});

const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Server is running on port`, PORT));