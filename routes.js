const routes = require('express').Router();
// const axios = require("axios");
// const fs = require("fs");


routes.get('/', (req, res) => {
    res.status(200).send('Working');
});

module.exports = routes;