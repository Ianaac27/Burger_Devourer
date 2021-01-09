const connection = require("./connection");

const orm = {
    
selectAll: function(table, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], (err, res) => {
        if (err) throw err;
        cb(res);
    });
},

insertOne: function(table, column, value, cb) {
    let queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table,column,value], (err,res) => {
        if (err) throw err;
        console.log(queryString);
        cb(res);
    })
},

updateOne: function(table, colVal, condition, cb) {
    let queryString = "UPDATE ?? SET ?? WHERE " + condition;
    connection.query(queryString, [table,colVal], (err,res) => {
        if (err) throw err;
        console.log(queryString);
        cb(res);
    })

}
};

module.exports = orm;