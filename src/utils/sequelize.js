const sequelize = require('sequelize');
const requireModels = require('sequelize-require-models');

const db = new sequelize(process.env.DATABASE,process.env.DB_USER,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

const models = requireModels(db,__dirname+'/../models');

db.authenticate().then((r) => {
    console.log("[DATABASE] Connection established");
}).then(r => {
    return db.sync();
}).then(r => {
    console.log("[DATABASE] Database synchronised");
}).catch(e => {
    console.error(e);
});

module.exports = Object.assign({ db }, models);
