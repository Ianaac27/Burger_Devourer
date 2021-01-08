const connection = require("./connection");

const orm = {
    
selectAll: function(table) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], (err, res) => {
        if (err) throw err;
        console.log(res);
    });
},

insertOne: function(table, column, value) {
    let queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table,column, value], (err,res) => {
        if (err) throw err;
        console.log(res);
    })
},

updateOne: function(table, column, value) {
    let queryString = "UPDATE ?? SET ?? WHERE ?";
    connection.query(queryString, [table,column,value], (err,res) => {
        if (err) throw err;
        console.log(res);
    })

}
};

module.exports = orm;