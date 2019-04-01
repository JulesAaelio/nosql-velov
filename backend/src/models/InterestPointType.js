const sequelize = require('sequelize');

module.exports = (db) => {
    const InterestPointType = db.define('interest_point_type', {
        name: {type: sequelize.DataTypes.STRING},
        detail: {type: sequelize.DataTypes.STRING},
    });

    InterestPointType.associate = (({ InterestPoint }) => {
        InterestPointType.hasMany(InterestPoint);
    });

    return InterestPointType;
};
