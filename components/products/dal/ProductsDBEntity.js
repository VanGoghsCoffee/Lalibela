const { DataTypes } = require('../../../lib/mysql');

function getProductsDBEntity(connection) {
    const ProductsDBEntity = connection.define('ProductsDBEntity', {
        userID: {
            type: DataTypes.BigInt,
            field: 'user_id'
        },
        createdAt: {
            type: 'TIMESTAMP',
            field: 'created_at'
        },
        updatedAt: {
            type: 'TIMESTAMP',
            field: 'updated_at'
        },
        title: {
            type: DataTypes.String,
        },
        productImage: {
            type: DataTypes.String,
            field: 'product_image'
        },
        description: {
            type: DataTypes.String
        },
        stock: {
            type: DataTypes.Integer
        },
        price: {
            type: DataTypes.Double
        }
    },
    {
        modelName: 'ProductsDBEntity',
        tableName: 'products'
    });
    return ProductsDBEntity;
}

module.exports = getProductsDBEntity;