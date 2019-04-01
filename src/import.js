require('dotenv').config();
console.log(`Import started at ${new Date()}`);

const request = require('request-promise-native');

(async () => {

    const mongo = await require('./utils/mongo')();
    const mysql = require('./utils/sequelize');

    importStations(mysql, mongo);
    setInterval(() => {
        importStations(mysql, mongo);
    },5 * 60 * 1000);// Should be more often but my computer is not a quantum calculator xoxo.

    importInterestPoint(mysql, mongo);
    setInterval(() => {
        importInterestPoint(mysql, mongo);
    }, 24 * 60 * 60 * 1000); // Distant data is updated on a daily basis.
})();


importStations = async (mysql, mongo) => {
    console.log('Velov stations import started');
    let response = await request.get('https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171');
    response = JSON.parse(response);
    if(!response.features) {
        throw "Invalid response received from data server";
    }

    await mongo.collection('velov').deleteMany({});
    mongo.collection('velov').insertMany(response.features).then(() => {
        console.log('Velov stations imported to mongo database successfully')
    });

    // Flush tables;
    await mysql.Station.destroy({where:{}});
    await mysql.StationIncident.destroy({where:{}});

    const instances = [];
    for (let i = 0; i < response.features.length; i++) {
        const instance = Object.assign({}, response.features[i].properties);
        instance.bonus = instance.bonus.toUpperCase() === 'OUI';

        if(instance.titre) {
            const [incident, created] = await mysql.StationIncident.findOrCreate({ where :{
                langue: instance.langue,
                etat : instance.etat,
                nature : instance.nature,
                titre : instance.titre,
                description : instance.description
            }});
            instance.stationIncidentId = incident.id;
        }

        instances.push(instance);
    }

    return mysql.Station.bulkCreate(instances).then(() => {
        console.log('Velov stations points imported to mysql database successfully')
    });
};


importInterestPoint = async (mysql, mongo) => {
    console.log('Interest points import started');
    let response = await request.get('https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=30&request=GetFeature&typename=sit_sitra.sittourisme&SRSNAME=urn:ogc:def:crs:EPSG::4171');
    response = JSON.parse(response);
    if(!response.features) {
        throw "Invalid response received from data server";
    }

    await mongo.collection('interest_points').deleteMany({});
    mongo.collection('interest_points').insertMany(response.features).then(() => {
        mongo.collection('interest_points').createIndex(
            {
                "properties.nom" : "text",
            }
        );
        console.log('Interest points imported to mongo database successfully')
    });
    


    // Flush tables;
    await mysql.InterestPoint.destroy({where:{}});
    await mysql.InterestPointType.destroy({where:{}});

    const instances = [];
    for (let i = 0; i < response.features.length; i++) {
        const instance = Object.assign({}, response.features[i].properties);
        instance.long = response.features[i].geometry.coordinates[0];
        instance.lat = response.features[i].geometry.coordinates[1];
        const [type, created] = await mysql.InterestPointType.findOrCreate({
            where: {
                name: instance.type,
                detail: instance.type_detail,
            }
        });
        instance.interestPointTypeId = type.id;
        instances.push(instance);
    }

    mysql.InterestPoint.bulkCreate(instances).then(() => {
        console.log('Interest points imported to mysql database successfully')
    });
};
