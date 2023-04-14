import { Router } from "express";
const router = Router();


router.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    res.send({message: `Hi ${req.session.name}`}) 
  });

  router.get("/gotham", (req,res) => {
    res.send({message: `I rember you ${req.session.name}`})
  })

  router.get("/leavegotham", (req,res) => {
    req.session.destroy(() => {
        res.send({})
    })
  })

  export default router;