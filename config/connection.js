const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASENAME, process.env.DATABASEUSERNAME, process.env.DATABASEPASSWORD, {
    host: 'localhost',
    dialect: "mysql",
    // logging:false
});



module.exports = sequelize