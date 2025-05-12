import axios from 'axios';

const API_BASE = 'http://localhost:5000'; // Your backend

export const getStockPrices = (symbol, minutes) =>
  axios.get(`${API_BASE}/stocks/${symbol}?minutes=${minutes}`);

export const getCorrelationMatrix = (minutes) =>
  axios.get(`${API_BASE}/correlation?minutes=${minutes}`);
