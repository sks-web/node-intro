// jshint esversion:6

const express = require("express");
const path = require("path");
const routes = express.Router();
// const rootDir = require("../util/rootpath");
const adminData = require("./admin");

// routes.get("/", (req, res, next) => {
//     console.log(adminData.products);
    
//     res.sendFile(path.join(rootDir,"views","shop.html"));
// });

routes.get("/", (req, res, next) => {
    // res.render("shop", {list: adminData.products, pageTitle: "My Shops", path: "/", isProduct: adminData.products.length>0});
    
    res.render("shop",{list: adminData.products, pageTitle: "My Shop", path: "/", isProduct: adminData.products.length > 0});
});

module.exports = routes;