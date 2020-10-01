var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    productName: 'test1',
    productPrice: 15,
  },{
    id: 2,
    productName: 'test2',
    productPrice: 15,
  }])
});

module.exports = router;
