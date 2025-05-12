import React, { useEffect, useState } from 'react';
import { getCorrelationMatrix } from '../services/api';
import { Box, Typography, Grid } from '@mui/material';
import { Tooltip } from '@mui/material';
import { HeatMap } from 'react-heatmap-grid';

const CorrelationHeatmapPage = () => {
  const [matrix, setMatrix] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCorrelationMatrix(10); // Example with 10 minutes
      setMatrix(response.data.matrix);
      setStocks(response.data.stocks);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Stock Correlation Heatmap</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeatMap
            xLabels={stocks}
            yLabels={stocks}
            data={matrix}
            background={'#eee'}
            cellHeight={40}
            cellWidth={40}
            xLabelWidth={60}
            yLabelWidth={60}
            onClick={(x, y) => setSelectedStock({ x: stocks[x], y: stocks[y] })}
          />
        </Grid>
      </Grid>

      {selectedStock && (
        <Box sx={{ marginTop: 2 }}>
          <Typography>Selected Correlation:</Typography>
          <Typography>{selectedStock.x} - {selectedStock.y}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CorrelationHeatmapPage;
