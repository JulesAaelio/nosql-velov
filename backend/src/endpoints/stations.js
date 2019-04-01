const express = require('express');

module.exports = (mongo) => {
    const router = express.Router();

    router.get('/',(req,res) => {
        mongo.collection('velov').find({}).toArray().then((stations) => {
            res.send(stations);
        });
    });

    router.get('/near/:placeId', async (req,res) => {
        const place = await mongo.collection('interest_points').findOne({
            "properties.id": req.params.placeId
        });

        const stations = await mongo.collection('velov').aggregate([
            {
                $geoNear: {
                    near: place.geometry,
                    distanceField: "distance",
                    maxDistance: 500
                }
            }
        ]).toArray();

        res.send(stations);
    });

    return router;
};
