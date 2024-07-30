const connection = require('./Connection');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/photo',(req,res)=>{
    connection.query('SELECT * FROM photofolio',(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
        }
    })
})

app.listen(3000,()=>console.log('Express Server is running on port : 3000'))