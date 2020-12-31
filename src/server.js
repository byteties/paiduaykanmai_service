// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import route from './routes'

const config = {
    name: 'paiduaykanmai-service',
    port: 8080,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(route)

// app.get('/', (req, res) => {
//     res.status(200).send('hello world');
// });

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    console.info(`${config.name} running on ${config.host}:${config.port}`);
});