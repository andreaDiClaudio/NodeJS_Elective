import {Router} from "express"; //object in express library
const router = Router(); //instantiate it

router.get("/room",  (req, res, next) => {
    //next(); //if we call next will call the next match
    log("I am in room 1");
    res.send({message: "I am in room 1"});
});

router.get("/room", (req, res, next) => {
    next();
    //res.send({message: "I am in room 2"})
});


export default router;