const Sequelize = require('sequelize');
require ('dotenv').config();

const db = new Sequelize("crud", "root", "11814152Arnob", {
    host: "127.0.0.1",
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