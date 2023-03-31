import express from "express";
import cors from "cors"

import path from "path";

const app = express();
app.use(cors({ 
    credentials: true,
    origin: true 
}));

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false, //it will resave the session even if changes do not happen
    saveUninitialized: true,
    cookie: { secure: false } //secure : true expect us to use https    
  }))
  
  app.use(express.static(path.resolve("/06._First_Svelte_Project")));

  app.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    res.send({message: `Hi ${req.session.name}`}) 
  });

  app.get("/gotham", (req,res) => {
    res.send({message: `I rember you ${req.session.name}`})
  })

  app.get("/leavegotham", (req,res) => {
    req.session.destroy(() => {
        res.send({})
    })
  })

app.get("/piblings", (req,res) => {
    res.send({data: ["John", "Mark"]})
});

const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Server is running on port`, PORT));