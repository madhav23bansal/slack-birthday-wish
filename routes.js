const routes = require('express').Router();
// const axios = require("axios");
// const fs = require("fs");


routes.get('/', (req, res) => {
    res.status(200).send('Working');
});

routes.post('/wish', (req, res) => {
    let response = {
        "response_type": "in_channel",
        "text": "It is working fine"
    }
    res.json(response);
})

module.exports = routes;