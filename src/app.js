import express from "express";
import cors from "cors";

import connection from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/items", async (req, res) =>{
    const result = await connection.query("SELECT * FROM items");
    res.send(result.rows);

});

app.post("/items", async (req, res) => {
    const { text } = req.body;
    await connection.query(`INSERT INTO item (text) VALUES ($1)`,[text]);
    res.sendStatus(200);
})

export default app;
