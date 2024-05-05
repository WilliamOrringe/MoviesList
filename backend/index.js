const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha..." });
});

const dbURI = "mongodb://localhost:27017";
mongoose.connect(dbURI)
.then((result) => app.listen(3001))
.catch((err) => console.log(err));
