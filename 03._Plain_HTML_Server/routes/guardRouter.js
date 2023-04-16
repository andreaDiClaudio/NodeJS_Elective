import { Router } from "express";
const router = Router();

router.get("/api/guards", (req, res) => {
    console.log(req.query); //req.query is an object with key value pairs
    if (req.query.passport === "secret") {
        return res.redirect("/api/tanks");
    }
    res.send({message: "You are not allowed to see tanks. Use the correct secret"});
});

export default router;