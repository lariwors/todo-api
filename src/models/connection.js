const mariadb = require("mariadb")
require('dotenv').config()

const connection = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DB
})

module.exports = connection