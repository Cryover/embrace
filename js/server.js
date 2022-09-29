const mysql = require("pg");

const connection = mysql.createConnection({
  host: "localhost",
  user: "postgres",
  password: "dorgas784",
  database: "embrace",
  port: "5432",
});

exports.connection = connection;
