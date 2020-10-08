const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/URL-shortener", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
});

app.post("/shortly", (req, res) => {

})

app.listen(process.env.PORT || 5000);