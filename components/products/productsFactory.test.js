const test = require('ava');
const ProductsFactory = require('./productsFactory');
const Product = require('./productsModel');

test('When creating a test product, should return Product', t => {
    const product = ProductsFactory.buildTestProduct();

    const expectedProduct = new Product({});

    t.is(Object.getPrototypeOf(product), Object.getPrototypeOf(expectedProduct));
});