var express = require('express');
var router = express.Router();
const uri = 'mongodb+srv://kennisonCreative:wOEcOIenerD1kjce@cluster0.rxfn7.mongodb.net/shop?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* GET products */
router.get('/', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        const db = client.db('shop')
        db.collection('products').find().toArray(function(err, products) {
            res.send(products)
        })



        // const db = client.db('shop');
        // var cursor = db.collection('products').find({});
        

        // res.send(JSON.stringify())
        // console.log(db.collection('products'))

        // function errorFunc(error) {
        //     console.log(error);
        // }


        
        client.close()
    });
})


module.exports = router;
