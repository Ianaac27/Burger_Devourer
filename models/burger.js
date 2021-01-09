const orm = require("../config/orm");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: function(column, value, cb) {
        orm.insertOne("burgers", column, value, (res) => {
            cb(res);
        });
    },

    updateOne: function(colVal, condition, cb) {
        orm.updateOne("burgers", colVal, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;