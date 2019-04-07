const express = require('express');

module.exports = (mongo) => {
    const router = express.Router();

    router.get('/',(req,res) => {
        mongo.collection('interest_points').find({
            "properties.nom" : new RegExp(`.*${req.query.search}.*`)
            // $text : {
            //     $search: req.query.search
            // }
        }).toArray().then((r) => {
            res.send(r);
        });
    });

    return router;
};
