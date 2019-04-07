const sequelize = require('sequelize');

module.exports = (db) => {
    const StationIncident = db.define('station_incident', {
        langue: {type: sequelize.DataTypes.STRING},
        etat : { type: sequelize.DataTypes.STRING },
        nature : { type: sequelize.DataTypes.STRING },
        titre : { type: sequelize.DataTypes.STRING },
        description : { type: sequelize.DataTypes.TEXT }
    });

    StationIncident.associate = (({ Station }) => {
        StationIncident.hasMany(Station);
    });

    return StationIncident;
};
