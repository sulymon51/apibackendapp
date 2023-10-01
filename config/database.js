const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    host: 'localhost',
    username:'database_development', // Use your own username here
    database:'database_development', // Use your own database here 
    password:'database_development', // Use your own password here
    dialect: 'mysql' 
});

module.exports = sequelize;