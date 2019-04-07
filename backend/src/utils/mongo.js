const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const retry = require('./retry');

module.exports = async () => {
    try {
        const client = await retry(connect, 8, 3000);
        const db = await client.db(process.env.MONGO_DB);
        console.log('Connection to the mongo server established successfully');
        return db;
    } catch (err) {
        console.error('Failed to established connection with the mongo server', err);
    }
};

connect = async () => {
    return await MongoClient.connect('mongodb://mongo:27017,mongo-1:27017,mongo-2:27017/admin?replicaSet=rs0', {
        useNewUrlParser: true,
    });
};
