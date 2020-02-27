const express = require('express');
const dotenv = require('dotenv').config({path: './config.env'});
const colors = require('colors');
const morgan = require('morgan');





const app = express();



app.get('/', (req,res) => res.send('Hello'));



const PORT = process.env.PORT || 5000


const mode = process.env.NODE_ENV;

app.listen(PORT, console.log(`server working in ${mode} mode on port ${PORT}`.yellow.bold));
