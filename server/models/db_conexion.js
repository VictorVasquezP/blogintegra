const {Client} = require('pg')
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'blog_integra',
    password: '123',
    port: 5432,
}

const client = new Client(connectionData);
client.connect(function(err){
    if (err) throw err;
});

module.exports = client;