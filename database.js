const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'railway_booking'
});

module.exports = pool;