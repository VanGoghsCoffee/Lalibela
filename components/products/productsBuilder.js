const Product = require('./productsModel');

class ProductBuilder {
    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.price = undefined;
        this.category = undefined;
    }

    withID({ id }) {
        this.id = id;
        return this;
    }

    withName({ name = 'Undefined'}) {
        this.name = name;
        return this;
    }

    withPrice({ price = 0.0 }) {
        this.price = price;
        return this;
    }

    withCategory({ category = 'Undefined'}) {
        this.category = category;
        return this;
    }

    build() {
        return new Product({
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category
        });
    }
}

module.exports = ProductBuilder;