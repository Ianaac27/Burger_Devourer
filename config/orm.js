const { response } = require("express");
const connection = require("./connection");

module.exports = {
    
selectAll() {
   return connection.query("SELECT * FROM burgers");
},

insertOne() {
    return connection.query("INSERT INTO burgers SET ?", 
        {
            burger_name: res.burger_name
        }
    )
},

updateOne() {
    return connection.query("UPDATE burgers SET ? WHERE ?", 
        [{
            burger_name: res.burger_name
        },
        {
            id: res.burger_id
        }]
    )
},
};

