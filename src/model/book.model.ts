import db from '../config/db.config'
import Sequelize from "sequelize";

    const Book =db.define("book", {
      name: {
        type: Sequelize.STRING(100),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      language: {
        type: Sequelize.STRING(100),
      },
      total_pages: {
        type: Sequelize.INTEGER,
      },
    })

    module.exports = Book;