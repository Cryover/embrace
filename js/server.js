const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dorgas784",
  database: "biblioteca",
  port: "3306",
});

exports.connection = connection;
