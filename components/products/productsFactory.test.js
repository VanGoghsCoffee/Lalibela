const test = require ('ava');
const ProductFactory = require('./productsFactory');
const Product = require ('./ProductsModel');

test('When creating a test product, should return Product', t => {
    const product = ProductFactory.buildTestProduct();

    const expectedProduct = new Product({});

    t.is(Object.getPrototypeOf(product), Object.getPrototypeOf(expectedProduct));
});