var express = require("express");
var router = express.Router();
const uri =
    "mongodb+srv://kennisonCreative:wOEcOIenerD1kjce@cluster0.rxfn7.mongodb.net/shop?retryWrites=true&w=majority";
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

/* GET products */
router.get("/", function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        const db = client.db("shop");
        db.collection("products")
            .find()
            .toArray(function (err, products) {
                res.json(products);
            });
        client.close();
    });
});

router.post("/", function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        const db = client.db("shop");
        let product = {
            productName: req.json(products.productName),
            productPrice: req.json(products.productPrice),
        };
        db.collection("products").insertOne(product);
        client.close();
    });
});

module.exports = router;
