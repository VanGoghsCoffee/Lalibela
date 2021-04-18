const convict = require('convict');

const config = convict({
    env: {
        doc: 'The applicatoin environmnent.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'The port to bind',
        format: 'port',
        default: '3000',
        env: 'PORT',
        arg: 'port'
    },
    interiorDB: {
        host: {
          doc: 'Database host name/IP',
          format: '*',
          default: 'mysql',
          env: 'INTERIOR_DB_HOST'
        },
        name: {
          doc: 'Database name',
          format: String,
          default: 'users',
          env: 'INTERIOR_DB_NAME'
        },
        port: {
          doc: 'Database port',
          format: '*',
          default: '3306',
          env: 'INTERIOR_DB_PORT'
        },
        password: {
          doc: 'Database password',
          format: String,
          default: '',
          env: 'INTERIOR_DB_PASSWORD'
        },
        user: {
          doc: 'Database user',
          format: String,
          default: '',
          env: 'INTERIOR_DB_USER'
        }
      }
})

config.validate({allowed: 'strict'});

module.exports = config;