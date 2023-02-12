"use strict";

const express = require("express");
const app = express();
app.use(express.json());

app.get("/birds", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(8080);
