// const axios = require('axios');

// const STOCK_API_URL = 'http://20.244.56.144/evaluation-service/stocks'; // Base URL for stock price API

// // Service to fetch stock price data from the external API
// exports.getStockPrice = async (ticker, minutes) => {
//     try {
//         // Construct the request URL with ticker and minutes
//         // const url = minutes ? `${STOCK_API_URL}/${ticker}?minutes=${minutes}` : `${STOCK_API_URL}/${ticker}`;
//         const url = minutes
//     ? `${STOCK_API_URL}/${ticker}?minutes=${minutes}`
//     : `${STOCK_API_URL}/${ticker}`;

//         // const response = await axios.get(url); // Make the GET request to the external API
//         const response = await axios.get(url, {
//     headers: {
//         'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDU3MzU0LCJpYXQiOjE3NDcwNTcwNTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNhMTI5ZTc4LWMzYjItNGNmYy05MzlkLTY4MGE3M2YyNWNkNSIsInN1YiI6ImNiLmVuLnU0Y3NlMjI0MjlAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSJ9LCJlbWFpbCI6ImNiLmVuLnU0Y3NlMjI0MjlAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSIsIm5hbWUiOiJwb2xpc2V0dHkgcmFteWEgc3JpIiwicm9sbE5vIjoiY2IuZW4udTRjc2UyMjQyOSIsImFjY2Vzc0NvZGUiOiJTd3V1S0UiLCJjbGllbnRJRCI6IjNhMTI5ZTc4LWMzYjItNGNmYy05MzlkLTY4MGE3M2YyNWNkNSIsImNsaWVudFNlY3JldCI6IkJkcGNTbkpBZVh5SnFwTnUifQ.zp60LHTZWe6edXqRa0wglx9PUEdxdFWqcKWW61i1ONw`
//     }
// });
//         return response.data; // Return the price data received from the API
//     } catch (error) {
//         throw new Error('Failed to fetch stock price data'); // Handle errors if API call fails
//     }
// };


const axios = require('axios');
require('dotenv').config(); // Load .env file

const STOCK_API_URL = 'http://20.244.56.144/evaluation-service/stocks';

exports.getStockPrice = async (ticker, minutes) => {
    try {
        const url = minutes 
            ? `${STOCK_API_URL}/${ticker}?minutes=${minutes}` 
            : `${STOCK_API_URL}/${ticker}`;
        
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('API error:', error.response?.data || error.message); // Add this
        throw new Error('Failed to fetch stock price data');
    }
};
