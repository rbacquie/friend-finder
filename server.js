// set requires packages as variables
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// setting variables for defining our port and Express server
var app = express();
var PORT = process.env.PORT || 8080;

// setting up so that the data can be parsed 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// setting requires so we can access the other files 
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// setting listener
app.listen(PORT, function() {
    console.log("App Listening on PORT: " + PORT);
});

