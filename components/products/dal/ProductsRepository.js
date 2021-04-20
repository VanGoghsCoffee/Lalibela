const InteriorShopConnection = require('../../db/InteriorShopConnection');

const getProductsDBEntity = require('./ProductsDBEntity');

class ProductsRepository {
    constructor() {
        if(ProductsRepository.instance == null) {
            this.connection = undefined;
            ProductsRepository.instance = this;
        }
        return ProductsRepository.instance;
    }

    async dbEntity() {
        if (!this.connection) {
            this.connection = await InteriorShopConnection.connect();
            this.products = await getProductsDBEntity(this.connection);
        }
        return this.products;
    }

    async findAll() {
        const entity = await this.dbEntity();
        return entity.findAll();
    }
}

const productsRepository = new ProductsRepository();

module.exports = productsRepository;