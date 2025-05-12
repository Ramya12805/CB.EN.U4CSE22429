const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController'); // Import controller functions

// Route for fetching stock price
router.get('/:ticker', stockController.getStockPrice);

// Route for fetching average stock price in the last "m" minutes
router.get('/:ticker/average', stockController.getAverageStockPrice);

module.exports = router; // Export the router to be used in the server.js
