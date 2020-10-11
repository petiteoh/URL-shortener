const express = require("express");
const mongoose = require("mongoose");
const Shortly = require("./models/shortly");
const app = express();
const server = require("http").createServer(app);
const db = require("./config/keys.js").mongoURI;
const port = process.env.PORT || 5000
server.listen(port, () => console.log(`listening on port ${port}`))

// mongoose.connect("mongodb://localhost/URL-shortener", {
//     useNewUrlParser: true, useUnifiedTopology: true
// });

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("connect to MongoDB"))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
});

app.post("/shortly", (req, res) => {
    Shortly.create({ original: req.body.oriURL })
})

app.listen(process.env.PORT || 5000);