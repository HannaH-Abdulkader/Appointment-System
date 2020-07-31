const express = require('express')
const cons = require("consolidate");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// view engine setup
app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

// Connect to mongoose
mongoose
    .connect("mongodb://localhost/appointmentDB", {
        //useMongoClient: true
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log("Server listening on port " + port);
});