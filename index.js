const express = require("express");
const mongoose = require("mongoose");
const Shortly = require("./models/shortly");
const app = express();
const server = require("http").createServer(app);
const db = require("./config/keys_dev").mongoURI;
const port = process.env.PORT || 5000
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

server.listen(port, () => console.log(`listening on port ${port}`))

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("connected to MongoDB"))
    .catch((err) => console.log(err)
);

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    debugger
    const shortlys = await Shortly.find();
    res.render("index", { shortlys: shortlys })
});

app.post("/shortly", async (req, res) => {
    debugger
    await Shortly.create({ original: req.body.oriURL })
});