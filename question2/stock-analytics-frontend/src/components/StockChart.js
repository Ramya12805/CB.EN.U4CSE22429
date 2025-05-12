import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getStockPrices } from '../services/api';
import { Typography, Box } from '@mui/material';

const StockChart = ({ symbol, minutes }) => {
  const [data, setData] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStockPrices(symbol, minutes);
      const prices = response.data;
      const avg = prices.reduce((acc, val) => acc + val.price, 0) / prices.length;
      setData(prices);
      setAverage(avg);
    };

    fetchData();
  }, [symbol, minutes]);

  return (
    <Box>
      <Typography variant="h6">Stock Price for {symbol} (Last {minutes} minutes)</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <Line type="monotone" dataKey={() => average} stroke="#ff7300" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StockChart;
