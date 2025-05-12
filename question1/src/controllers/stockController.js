const stockService = require('../services/stockService'); // Import service functions
const { calculateAverage } = require('../utils/utils');  // Import utility function for calculating average

// Controller to fetch the stock price
exports.getStockPrice = async (req, res) => {
    try {
        const { ticker } = req.params; // Get ticker from the request parameters
        const priceData = await stockService.getStockPrice(ticker); // Get stock price from service
        res.json(priceData); // Send back the price data as a response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};

// Controller to fetch the average stock price for the last "m" minutes
exports.getAverageStockPrice = async (req, res) => {
    try {
        const { ticker } = req.params; // Get ticker from request parameters
        const minutes = req.query.minutes; // Get "minutes" from query parameters
        const priceData = await stockService.getStockPrice(ticker, minutes); // Fetch the stock data from the service
        const average = calculateAverage(priceData); // Calculate the average price using a utility function
        res.json({ averageStockPrice: average, priceHistory: priceData }); // Send the response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
};
