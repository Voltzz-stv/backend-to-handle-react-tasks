const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/feed");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.json({ item: "hi" });
});

app.use(router);

mongoose
  .connect("mongodb+srv://stephen:STV8689889582@voltz.kyxbvqo.mongodb.net/")
  .then(() => {
    console.log("db connected");
    app.listen(3006, () => console.log("app @ 3006"));
  })
  .catch((err) => console.log(err));
