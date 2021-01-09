const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "",
    database: "burger_db",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connection as id " + connection.threadID);
});

// connection.query = util.promisify(connection.query);

module.exports = connection;