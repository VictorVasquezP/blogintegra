const postgres = require('pg');

const connection = new postgres.Pool({
    user: "postgres",
    host: "localhost",  
    database: "blog_integra",
    password: "12890",
    port: 5432
});

module.exports = connection;