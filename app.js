const { request } = require('express');
const express= require('express');
const app = express();
const morgan = require('morgan');
const {Pool}= require('pg');
require('dotenv').config();


const port = 3000;

app.use(morgan('comon'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(port,[
    console.log('le serveur est en ecoute au port 3000')
]);