require('dotenv').config();
const express = require("express")
const bodyParser = require("body-parser");
const routes = require('./routes');


// Initialize express and define a port
const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));