const express=require ('express')
const bodyParser=require('body-parser');

const{mongoose}=require('../nodeJs/db');
var employeeController=require('../nodeJs/controllers/employeeController');

var app=express();
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('express server started at 3000');
})
app.use('/employees',employeeController);