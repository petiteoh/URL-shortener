const express = require("express");
const mongoose = require("mongoose");
const Shortly = require("./models/shortly");
const app = express();

mongoose.connect("mongodb://localhost/URL-shortener", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("index")
});

app.post("/shortly", async (req, res) => {
    await Shortly.create({ original: req.body.oriURL })
    res.redirect("/")
})

app.listen(process.env.PORT || 5000);