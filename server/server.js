const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017";

mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
    console.log("mongoose connected");
    
})

app.get('/', (req, res) => {
    res.json({ name: "危险流浪者", place: "香港" });
})

app.listen(9093, () => {
    console.log("listen 9093");
})