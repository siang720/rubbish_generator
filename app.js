// require packages
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generateRubbish = require("./generate_rubbish");
const port = 3000;
const app = express();

// handlebars register helper
const Handlebars = require("handlebars");

Handlebars.registerHelper("ifEquals", function(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

// template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting body parser
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body;
  const rubbish = generateRubbish(req.body);
  res.render("index", { rubbish: rubbish, job: options.jobs });
});

// listen to port
app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`);
});
