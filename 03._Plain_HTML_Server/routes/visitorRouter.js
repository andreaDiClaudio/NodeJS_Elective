import { Router } from "express";
const router = Router();


router.get("/api/visitors", (req, res) => {
    res.send({data: visitorCount})
})

export default router;