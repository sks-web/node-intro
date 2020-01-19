// jshint esversin:6
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/rootpath");
const pug = require("pug");

const app = express();
app.set("view engine", "pug");
app.set("views", "views")

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));

app.use("/admin", adminRoutes.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send("<h1>Page Not Found</h1>");d
    res.status(404).render("page-not-found");
});

app.listen(3000,() => {
    console.log("Server start at Port 3000");
    
});