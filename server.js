const express= require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/burgers_controller");

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});