'use strict'
const mysql = require('mysql2/promise')
const config = require('../conf')
const pool = mysql.createPool(config.poolConfig)
module.exports = pool