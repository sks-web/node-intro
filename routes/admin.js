// jshint esversion:6
const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/rootpath");

const products = [];

// /admin/add-product => get
router.get("/add-product", (req, res, next) => {
    res.render("add-product", { title: "Add-Product", path: "/admin/add-product"});
});

// /admin/add-product => post
router.post("/add-product", (req, res, next) => {
    products.push(req.body.product);
    res.render("shop",{list: products, title: "My Shop", path: "/"});
});

exports.routes = router;
exports.products = products;