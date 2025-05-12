// Utility function to calculate the average stock price
exports.calculateAverage = (data) => {
    const total = data.reduce((acc, item) => acc + item.price, 0); // Sum up all prices
    return total / data.length; // Return the average price
};
