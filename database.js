const mysql = require('mysql')

const DB_CONFIG = require('./config/config.dev').DB_CONFIG

const connection = mysql.createConnection(DB_CONFIG)

module.exports = {
    MYSQL: {
        connect: function() {
            connection.connect(function(error) {
                if (error) throw error
                return connection
            });
        },
        disconect: function() {
            connection.end()
        }
    }
}