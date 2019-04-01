const sequelize = require('sequelize');

module.exports = (db) => {
    const Station = db.define('station', {
        number: {type: sequelize.DataTypes.INTEGER},
        name : { type: sequelize.DataTypes.STRING },
        address : { type: sequelize.DataTypes.STRING },
        address2 : { type: sequelize.DataTypes.STRING },
        commune : { type: sequelize.DataTypes.STRING },
        bonus : { type: sequelize.DataTypes.BOOLEAN },
        pole : { type: sequelize.DataTypes.STRING },
        lat: {type: sequelize.DataTypes.FLOAT},
        long: {type: sequelize.DataTypes.FLOAT},
        bike_stands: {type: sequelize.DataTypes.INTEGER},
        status: {type: sequelize.DataTypes.STRING},
        available_bike_stands: {type: sequelize.DataTypes.INTEGER},
        available_bikes: {type: sequelize.DataTypes.INTEGER},
        availabilitycode: {type: sequelize.DataTypes.INTEGER},
        availability: {type: sequelize.DataTypes.STRING},
        banking: {type: sequelize.DataTypes.INTEGER},
        gid: {type: sequelize.DataTypes.INTEGER},
        code_insee: {type: sequelize.DataTypes.INTEGER},
    });

    Station.associate = (({ StationIncident }) => {
        Station.belongsTo(StationIncident);
    });

    return Station;
};
