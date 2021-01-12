const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req,res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], (result) => {
        res.json({ id: result.insertID});

        console.log(result);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    console.log(req.body);
    console.log(req.body.devoured);
    
    // var devourString = JSON.stringify(req.body)
    burger.updateOne([
        req.body.devoured 
    ], id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;