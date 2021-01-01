import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import route from './routes'

const config = {
    name: 'paiduaykanmai-service',
    port: 8080,
    host: '0.0.0.0',
    dbstring: 'mongodb://mongodb:27017',
    option: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
};


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(route)

mongoose.connect(config.dbstring, config.option, (connectionError) => {
    if (connectionError) {
      console.warn('Mongoose could not connect.')
      console.error(connectionError)
    }
})
mongoose.connection.on('connected', () => {
    console.info('Mongoose connection has been connected.')
})
app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    console.info(`${config.name} running on ${config.host}:${config.port}`);
});