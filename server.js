/* dependencies */
var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");

var PORT = process.env.PORT || 8080;

/*creating an instance of express*/
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

/*app.use(routes);*/

/*launching server & listening*/
app.listen(PORT, function() {
  console.log("app is loaded: on local host:" + PORT);
});
