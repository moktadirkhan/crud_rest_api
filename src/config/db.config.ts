const Sequelize = require('sequelize');
require ('dotenv').config();

const db = new Sequelize(process.env.DB_NAME, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOSTNAME,
    logging:false,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

export default db;