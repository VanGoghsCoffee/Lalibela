const Router =  require('express');
var router = Router();
const InteriorShopConnection = require('../../db/InteriorShopConnection');
const ProductsRepository = require('../dal/ProductsRepository');

router.get('/', async function(req, res, next) {
    await InteriorShopConnection.testConnection();
    const products = await ProductsRepository.findAll();
    res.send(products)
});

module.exports = router;
