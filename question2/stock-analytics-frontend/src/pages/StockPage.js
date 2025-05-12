import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import StockChart from '../components/StockChart';
import TimeSelector from '../components/TimeSelector';

const StockPage = () => {
  const [selectedTime, setSelectedTime] = useState(10); // Default to 10 minutes
  const [symbol, setSymbol] = useState('AAPL'); // Default stock symbol

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TimeSelector selectedTime={selectedTime} onChange={setSelectedTime} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <StockChart symbol={symbol} minutes={selectedTime} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StockPage;
