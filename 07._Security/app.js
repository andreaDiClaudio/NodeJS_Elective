import express from "express";
import cors from "cors"
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import session from "express-session";
import { Console, log } from "console";

dotenv.config();//Needed to read the file

log(process.env.SESSION_SECRET);

const app = express();
app.use(cors({ 
    credentials: true,
    origin: true 
}));

app.use(session({
    secret: process.env.SESSION_SECRET,//This is not safe because we have pushed it on github
    resave: false, //it will resave the session even if changes do not happen
    saveUninitialized: true,
    cookie: { secure: false } //secure : true expect us to use https    
  }))
  
app.use(express.static(path.resolve("/06._First_Svelte_Project")));

import gothamRouter from "./routers/gothamRouter.js"
app.use(gothamRouter);

app.use(helmet());

import rateLimit from 'express-rate-limit'

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to API calls only
app.use(apiLimiter);

app.use("/auth", rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 4,
  standardHeaders:true,
  legacyHeaders:false
}))

import authRouter from "./routers/authRouter.js"
app.use(authRouter);

app.get("/piblings", (req,res) => {
    res.send({data: ["John", "Mark"]})
});

const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Server is running on port`, PORT));