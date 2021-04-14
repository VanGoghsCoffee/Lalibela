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
    db: {
        host: {
          doc: 'Database host name/IP',
          format: '*',
          default: 'server1.dev.test'
        },
        name: {
          doc: 'Database name',
          format: String,
          default: 'users'
        }
      }
})

config.validate({allowed: 'strict'});

module.exports = config;