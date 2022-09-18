const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "bookstore",
    user: "root",
    password: "password",
});

connection.connect(function(error) {
    if (error) throw error;
    else console.log("MySQL Database is connected Successfully");
});

module.exports = connection;