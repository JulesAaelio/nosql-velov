const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

module.exports = async () => {
    const client = new MongoClient('mongodb://admin:admin@mongo:27017');
    try {
        await client.connect();
        const db = client.db(process.env.MONGO_DB);
        return db;
    } catch (err) {
        console.error('Error connecting to the mongo server', err);
    }
};
