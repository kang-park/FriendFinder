//Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

//Set up Express to parse data
let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Server listening
app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
});