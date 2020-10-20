var express = require('express');
var router = express.Router();
const uri = 'mongodb+srv://kennisonCreative:wOEcOIenerD1kjce@cluster0.rxfn7.mongodb.net/shop?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* GET products */
router.get('/', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        assert.equal(null, err);
        const db = client.db('shop');
        var cursor = db.collection('products').find({});
        
        function iterateFunc(doc) {
            console.log(JSON.stringify(doc));
            return JSON.stringify(doc)
        }

        function errorFunc(error) {
            console.log(error);
        }

        cursor.forEach(iterateFunc, errorFunc)

        res.send('send request for products')
        client.close()
    });
})


module.exports = router;
