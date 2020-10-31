let express = require("express")
let exphbs = require("express-handlebars")
let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

let routes = require("./controllers/burgers_controller.js")
app.use(routes)

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });