const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host : 'den1.mysql5.gear.host',
    user : 'webshopspring',
    password : 'Gj58~!F9ySUi',
    database : 'WebShopSpring',
    multipleStaements : true
});

mysqlConnection.connect((err) =>{
    if(!err)
    {
        console.log('connected')
    } else {
        console.log('Connection Failed')
    }
});

module.exports = mysqlConnection;