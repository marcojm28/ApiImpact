const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Marco4223602',
  database : 'bdimpact'
});

module.exports = dbConn;