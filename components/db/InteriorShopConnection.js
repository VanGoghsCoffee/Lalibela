const mysql = require('../../lib/mysql');
const config = require('../../config');

async function createInstance() {
    const options = {
        username: config.get('interiorDB.user'),
        password: config.get('interiorDB.password'),
        host: config.get('interiorDB.host'),
        port: config.get('interiorDB.port'),
        database: config.get('interiorDB.name')
    }
    return mysql.createDB(options);
}

class InteriorShopConnection {
    constructor() {
        if (InteriorShopConnection.instance == null) {
            InteriorShopConnection.instance = this;
        }
        return InteriorShopConnection.instance;
    }

    async connect() {
        if(this.dbInstance == undefined) {
            this.dbInstance = createInstance();
        }
        return this.dbInstance;
    }

    async getConnection() {
        const db = await this.connect();
        return db;
    }

    async testConnection() {
        const db = await this.connect();
        await mysql.testConnection({ sequelize: db });
    }
}

const interiorShopConnection = new InteriorShopConnection();

module.exports = interiorShopConnection;