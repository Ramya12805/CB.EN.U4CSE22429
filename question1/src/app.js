const express = require('express');
const stockRoutes = require('./routes/stockRoutes');
const app = express();

app.use(express.json());
app.use('/stocks', stockRoutes);

module.exports = app;
