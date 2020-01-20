// jshint esversin:6
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/rootpath");
// const pug = require("pug");
const expresshbs = require("express-handlebars");

const app = express();
app.engine("hbs", expresshbs({
    layoutsDir: "views/layouts/", 
    defaultLayout: "main-layouts",
    extname:"hbs"
}));
app.set("view engine", "hbs");
app.set("views", "views");
// app.set("view engine", "pug");
// app.set("views", "views")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send("<h1>Page Not Found</h1>");
    res.status(404).render("404", {
        pageTitle: "Page Not Found",
        activeProduct: false,
        activeShop: false
    });
});

app.listen(3000, () => {
    console.log("Server start at Port 3000");

});