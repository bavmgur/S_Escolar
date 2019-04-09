const Sequelize = require('sequelize')

module.exports = {
    connectDB: function() {

        const sequelize = new Sequelize('blntfun26ydpczwutb0l', 'uurxiopyuu4jhgh7', '7wVIpr55HKI7orYf0eSY', {
            host: 'blntfun26ydpczwutb0l-mysql.services.clever-cloud.com',
            dialect: 'mysql'
        })

        return sequelize
    }
}