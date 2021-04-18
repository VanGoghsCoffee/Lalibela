const Router =  require('express');
var router = Router();
const ProductFactory = require('../productsFactory');
const ProductDB = require('../../db/productsDB');

router.get('/', async function(req, res, next) {
    const productDB = await ProductDB.getInstance();
    await ProductDB.testConnection();
    res.send(ProductFactory.buildTestProduct())
});

module.exports = router;
