// jshint esversion:6
const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/rootpath");

const products = [];

// /admin/add-product => get
router.get("/add-product", (req, res, next) => {
    // res.render("add-product", { pageTitle: "Add-Product", path: "/admin/add-product"});
    res.render("add-product", { pageTitle: "Add-Product", activeProduct:true});
});

// /admin/add-product => post
router.post("/add-product", (req, res, next) => {
    products.push(req.body.product);
    // res.render("shop",{list: products, pageTitle: "My Shop", path: "/", isProduct: products.length > 0});
    res.render("shop",{list: products, pageTitle: "My Shop", activeShop:true, isProduct: products.length > 0});
});

exports.routes = router;
exports.products = products;