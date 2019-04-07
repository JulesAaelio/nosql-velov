const sequelize = require('sequelize');
const requireModels = require('sequelize-require-models');
const retry = require('./retry');

const db = new sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    retry: {
        match: [
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/,
            /SequelizeHostNotFoundError/
        ],
        name: 'query',
        timeout: 3000,
        max: 3
    }
});

const models = requireModels(db, __dirname + '/../models');



module.exports = async () => {
    try {
        await retry(db.authenticate, 5, 3000);
        console.log("Connection to the MySQL server established successfully");
    } catch (e) {
        console.log("Failed to established connection with mysql server", e);
    }

    try {
        await db.sync();
        console.log("MySQL database has been synchronized");
    } catch (e) {
        console.error("error synchronizing", e);
    }
    return Object.assign(db, models);
};

