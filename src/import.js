require('dotenv').config();
console.log(`Import started at ${new Date()}`);

const request = require('request-promise-native');
const mongo = require('mongodb').MongoClient

request.get('https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error("An error occured while downloading data. ", error);
    });

