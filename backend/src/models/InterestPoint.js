const sequelize = require('sequelize');

module.exports = (db) => {
    const InterestPoint = db.define('interest_point', {
        id_grand_lyon: {type: sequelize.DataTypes.STRING},
        id_sitra1: {type: sequelize.DataTypes.STRING},
        nom: {type: sequelize.DataTypes.STRING},
        adresse: {type: sequelize.DataTypes.STRING},
        codepostal: {type: sequelize.DataTypes.STRING},
        telephone: {type: sequelize.DataTypes.STRING},
        telephonefax: {type: sequelize.DataTypes.STRING},
        email: {type: sequelize.DataTypes.STRING},
        siteweb: {type: sequelize.DataTypes.STRING},
        facebook: {type: sequelize.DataTypes.STRING},
        classement: {type: sequelize.DataTypes.STRING},
        ouverture: {type: sequelize.DataTypes.STRING},
        tarifsenclair: {type: sequelize.DataTypes.STRING},
        tarifsmin: {type: sequelize.DataTypes.STRING},
        tarifsmax: {type: sequelize.DataTypes.STRING},
        producteur: {type: sequelize.DataTypes.STRING},
        gid: {type: sequelize.DataTypes.STRING},
        lat: {type: sequelize.DataTypes.STRING},
        long: {type: sequelize.DataTypes.STRING},
    });

    InterestPoint.associate = (({ InterestPointType }) => {
        InterestPoint.belongsTo(InterestPointType);
    });

    return InterestPoint;
};
