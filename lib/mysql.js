const { Sequelize, DataTypes, Model } = require('sequelize');

function createDB({ username, password, host, port, database }) {
    return new Sequelize({
        dialect: 'mysql',
        username,
        password,
        host,
        port,
        database
    })
};

async function testConnection({ sequelize }) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.'); 
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }
}

module.exports = {
    createDB,
    testConnection,
    DBModel: Model,
    DataTypes: {
        String: DataTypes.STRING,
        BigInt: DataTypes.BIGINT,
        Integer: DataTypes.INTEGER,
        Double: DataTypes.DOUBLE
    }
 } ;