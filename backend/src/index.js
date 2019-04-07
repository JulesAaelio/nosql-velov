require('dotenv').config();
console.log(`Application started at ${new Date()}`);
const app = require('./utils/express');
(async () => {

    const mongo = await require('./utils/mongo')();
    const mysql = await require('./utils/sequelize')();

    app.use('/stations',require('./endpoints/stations')(mongo));
    app.use('/places',require('./endpoints/places')(mongo));

    app.listen(process.env.API_PORT);
    console.log("salut");

})();
