var express = require('express');
var router = express.Router();
const products = require('../products')

/* GET products */
router.get('/', function (req, res) {
    res.json(products)
});

/* POST products */
router.post('/', function (req, res) {
    res.send()
})

module.exports = router;
