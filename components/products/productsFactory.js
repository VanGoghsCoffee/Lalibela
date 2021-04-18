
const ProductBuilder = require('./ProductsBuilder');

const ProductFactory = {
    buildTestProduct: () => {
        return new ProductBuilder()
            .withID({ id: '123-4'})
            .withName({ name: 'Test Product'})
            .withPrice({ price: 24.99 })
            .withCategory({ category: 'Testing' })
            .build();
    }
}

module.exports = ProductFactory;