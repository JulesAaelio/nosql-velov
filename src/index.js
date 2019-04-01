require('dotenv').config();
console.log(`Application started at ${new Date()}`);
const app = require('./utils/express');
(async () => {

    const mongo = await require('./utils/mongo')();
    const mysql = require('./utils/sequelize');

    app.use('/stations',require('./endpoints/stations')(mongo));

    app.listen(process.env.API_PORT);
    console.log("salut");

})();
