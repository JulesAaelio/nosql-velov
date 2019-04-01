const express = require('express');

module.exports = (mongo) => {
    const router = express.Router();

    router.get('/',(req,res) => {
        mongo.collection('velov').find({}).toArray().then((r) => {
            res.send(r);
        });
    });

    return router;
};
