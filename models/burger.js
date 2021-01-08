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

    updateOne: function(column, value, cb) {
        orm.updateOne("burgers", column, value, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;