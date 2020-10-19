var express = require('express');
var router = express.Router();
const uri = 'mongodb+srv://kennisonCreative:wOEcOIenerD1kjce@cluster0.rxfn7.mongodb.net/shop?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var str = 'hi'

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
        // cursor.each(function(err, item) {
        //     if (item != null) {
        //         str = 'Product ID: ' + item._id
        //     }
        // })
        // console.log(cursor)
        res.send(JSON.stringify(doc))
        client.close()
    });
})


module.exports = router;
