// modules importation
const express = require('express');
const cors = require('cors');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(require('./routes/card'));

// settings
app.set('port', process.env.PORT || 5000);

module.exports = app;