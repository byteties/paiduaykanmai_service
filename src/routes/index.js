const express = require('express')

const route = express()

route.get('/healthz', (req, res) => {
  res.send('OK')
})

route.get('/', (req, res) => {
    res.status(200).send('hello world');
});

export default route
