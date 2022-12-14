const mysql = require('mysql');

const con = mysql.createConnection({
    host: "database-1.cqlyhsrtydni.us-east-1.rds.amazonaws.com",
    user: "admin",
    database: "proj",
    port: "3306",
    password: "12345678",
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=con;