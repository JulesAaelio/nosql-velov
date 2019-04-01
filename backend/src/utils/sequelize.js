const sequelize = require('sequelize');
const requireModels = require('sequelize-require-models');

const db = new sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
});

const models = requireModels(db, __dirname + '/../models');

db.authenticate()
    .then(() => {
        console.log("Connection to the MySQL server established successfully");
    }).then(() => {
        return db.sync();
    }).then(() => {
        console.log("MySQL database has been synchronized");
    }).catch(e => {
        console.error(e);
});

module.exports = Object.assign(db, models);
