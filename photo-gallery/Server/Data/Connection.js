const mysql = require('mysql2');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'6399',
    database:'photofolio'
})

var connection = conn.connect((err)=>{
    if(err){
        console.log('Error in DB connection' + JSON.stringify(err,undefined,2));
    }else{
        console.log('Database Connect Succesfully');
    }
})

module.exports=connection;