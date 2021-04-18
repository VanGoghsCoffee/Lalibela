const test = require('ava');
const ProductBuilder = require('./ProductsBuilder');
const Product = require('./ProductsModel.js');

test('When building a product, should return Product', t => {
    const product = new ProductBuilder().build();

    const expectedProduct = new Product({});

    t.is(Object.getPrototypeOf(product), Object.getPrototypeOf(expectedProduct));
});

test('When building a product without setting anything, should return a Product with undefined values', t => {
    const product = new ProductBuilder().build();

    const expectedProduct = new Product({ id: undefined, name: undefined, category: undefined, price: undefined});

    t.deepEqual(product, expectedProduct);
});

test('When building a product with ID, should return Product with the same ID', t => {
    const id = '123-4';
    const product = new ProductBuilder().withID({ id }).build();

    t.is(product.id, id);
});

test('When building a product with category, should return Product with the same category', t => {
    const category = 'Category for testing purposes';
    const product = new ProductBuilder().withCategory({ category }).build();

    t.is(product.category, category);
});

test('When building a product with price, should return Product with the same price', t => {
    const price = 99.99;
    const product = new ProductBuilder().withPrice({ price }).build();

    t.is(product.price, price);
});

test('When building a product with name, should return Product with the same name', t => {
    const name = 'A testing product';
    const product = new ProductBuilder().withName({ name }).build();

    t.is(product.name, name);
});