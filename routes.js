const routes = require('express').Router();
// const axios = require("axios");
// const fs = require("fs");


routes.get('/', (req, res) => {
    res.status(200).send('Working');
});

routes.post('/wish', (req, res) => {
    let data = {
        'name': 'Madhav'
    }
    res.json(data);
})

module.exports = routes;