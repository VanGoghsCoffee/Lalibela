var express = require('express');
var router = express.Router();
const ProductFactory = require('../productsFactory');

router.get('/', function(req, res, next) {
    res.send(ProductFactory.buildTestProduct())
});

module.exports = router;

