var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: 'brooke1'
  },{
    id: 2,
    username: 'reid1'
  }])
});

module.exports = router;
