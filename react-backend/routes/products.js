var express = require('express');
var router = express.Router();
const products = require('../products')

/* GET products */
router.get('/', function (req, res) {
    res.send(products)
});

router.get('/:id', function (req, res) {
    res.send('Product id = ' + req.params.id);
})




/* POST products */
// router.post('/', function (req, res) {
//     res.send('POST request to the homepage')
//   })

module.exports = router;
