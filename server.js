// require packages 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
//static content for the app from the "public" folder
app.use(express.static(process.cwd()+ "/public"));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride("_method"));
//require package
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");
//create a route 
var routes = require("./controllers/chatroom_controllers.js");
app.use("/", routes);
//listen to port 
var port = process.env.PORT || 3000;
app.listen(port);

