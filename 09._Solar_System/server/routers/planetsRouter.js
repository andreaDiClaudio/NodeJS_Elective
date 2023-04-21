import { Router } from "express";
import db from "../databases/connection.js"

const router = Router();

router.get("/planets", async (req, res) => {
    const planets = await db.all(`SELECT * FROM planets`);
    res.send({ planets });
});


export default router;