require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT;


app.get('/',(req,res)=> {
    return res.send('hello world ...');
})

app.listen(port,function(){
    console.log('Server is running...',port);
})