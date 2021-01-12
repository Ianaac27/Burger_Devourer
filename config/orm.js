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

updateOne: function(table, value, id, cb) {
    let queryString = "UPDATE ?? SET devoured = ? WHERE id= " + id;

    let valueIndex = value[0];

    let valueBoolean = JSON.parse(valueIndex);

    console.log(valueBoolean);
    connection.query(queryString, [table,valueBoolean], (err,res) => {
        if (err) throw err;
        console.log(queryString);
        cb(res);
    })

}
};

module.exports = orm;