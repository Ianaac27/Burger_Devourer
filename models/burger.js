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

    updateOne: function(value, id, cb) {
        orm.updateOne("burgers", value, id, (res) => {
            cb(res);
        });
    },

    deleteOne: function(id, cb) {
        orm.deleteOne("burgers", id, (res) => {
            cb(res);
        })
    }
};

module.exports = burger;