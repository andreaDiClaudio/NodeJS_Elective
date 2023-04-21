import express, { json } from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Works" })
})

import planetsRouter from "./routers/planetsRouter.js";
app.use(planetsRouter); //sets up middleware

import peopleRouter from "./routers/peopleRouter.js";
app.use(peopleRouter);


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log("Running on port ", server.address().port);
})