/* Use this file to expose your routes */
const list = require('./routes/list_route.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/list", list)

module.exports = app