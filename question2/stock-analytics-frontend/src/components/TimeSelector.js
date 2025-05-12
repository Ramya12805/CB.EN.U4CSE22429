import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const TimeSelector = ({ selectedTime, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Time Interval (minutes)</InputLabel>
      <Select value={selectedTime} onChange={(e) => onChange(e.target.value)}>
        <MenuItem value={5}>5 minutes</MenuItem>
        <MenuItem value={10}>10 minutes</MenuItem>
        <MenuItem value={15}>15 minutes</MenuItem>
        <MenuItem value={30}>30 minutes</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TimeSelector;
