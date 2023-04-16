import { Router } from "express";
const router = Router();

router.get("/api/tanks", (req, res) => {
    res.send({data: tanks})
});

export default router;