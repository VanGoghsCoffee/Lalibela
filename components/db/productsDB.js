const mysql = require('../../lib/mysql');
const config = require('../../config');

let database = undefined;

async function getInstance() {
    if (!database) {
        await createInstance();
    }
    return database;
}

async function createInstance() {
    const options = {
        username: config.get('interiorDB.user'),
        password: config.get('interiorDB.password'),
        host: config.get('interiorDB.host'),
        port: config.get('interiorDB.port'),
        database: config.get('interiorDB.name')
    }
    database = await mysql.createDB(options)
}

async function testConnection() {
    await mysql.testConnection({ sequelize: database });
}

module.exports = {
    getInstance,
    testConnection
}