const routes = require('express').Router();
const { getRandomWish } = require('./utils/wishes');
// const axios = require("axios");
// const fs = require("fs");


routes.get('/', (req, res) => {
    res.status(200).send('Working');
});

routes.post('/wish', (req, res) => {

    let wish = getRandomWish();

    let response = {
        "response_type": "in_channel",
        "text": "To " + req.body.text + "\n" + wish + "\nBest,\n" + "<@" + req.body.user_name + ">"
    }
    res.json(response);
})

module.exports = routes;