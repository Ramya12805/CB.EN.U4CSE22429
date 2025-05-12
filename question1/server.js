// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = 3000;

// app.get('/stocks/:ticker', async (req, res) => {
//     const { ticker } = req.params;
//     const minutes = req.query.minutes;

//     try {
//         // Make the API call to the stock service
//         const response = await axios.get(`http://20.244.56.144/evaluation-service/stocks/${ticker}?minutes=${minutes}`, {
//             headers: {
//                 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDU3MzU0LCJpYXQiOjE3NDcwNTcwNTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNhMTI5ZTc4LWMzYjItNGNmYy05MzlkLTY4MGE3M2YyNWNkNSIsInN1YiI6ImNiLmVuLnU0Y3NlMjI0MjlAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSJ9LCJlbWFpbCI6ImNiLmVuLnU0Y3NlMjI0MjlAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSIsIm5hbWUiOiJwb2xpc2V0dHkgcmFteWEgc3JpIiwicm9sbE5vIjoiY2IuZW4udTRjc2UyMjQyOSIsImFjY2Vzc0NvZGUiOiJTd3V1S0UiLCJjbGllbnRJRCI6IjNhMTI5ZTc4LWMzYjItNGNmYy05MzlkLTY4MGE3M2YyNWNkNSIsImNsaWVudFNlY3JldCI6IkJkcGNTbkpBZVh5SnFwTnUifQ.zp60LHTZWe6edXqRa0wglx9PUEdxdFWqcKWW61i1ONw` // Replace with your token
//             }
//         });

//         // Process the stock data
//         const prices = response.data;
//         const averageStockPrice = calculateAverage(prices);
        
//         // Send the response
//         res.json({
//             averageStockPrice,
//             priceHistory: prices
//         });
//     } catch (error) {
//         console.error('Error fetching stock data:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });

// // Function to calculate average stock price
// const calculateAverage = (prices) => {
//     const total = prices.reduce((acc, priceData) => acc + priceData.price, 0);
//     return total / prices.length;
// };

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const app = require('./src/app'); // Correct import
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
