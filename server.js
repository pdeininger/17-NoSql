/* dependencies */
var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var serverRoutes = require("./Routes/backend/api-routes");
var clientRoutes = require("./Routes/frontend/html routes");

var PORT = process.env.PORT || 8080;

/*creating an instance of express*/
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(serverRoutes);
app.use(clientRoutes);

/*launching server & listening*/
app.listen(PORT, function () {
  console.log("app is loaded: on local host:" + PORT);
});
