require('dotenv').config();
console.log(`Import started at ${new Date()}`);

const request = require('request-promise-native');

(async () => {
   const db = await require('./utils/mongo')();
    request.get('https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171')
        .then(response => {
            response = JSON.parse(response);
            if(!response.features) {
                throw "Invalid response received from data server";
            }
            db.collection('velov').insertMany(response.features);
            console.log(`Import finished at ${new Date()}`);
        })
        .catch(error => {
            console.error("An error occured while downloading data. ", error);
        });
})();





