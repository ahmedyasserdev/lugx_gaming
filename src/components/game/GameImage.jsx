import React from 'react';
import { Box } from '@mui/material';

const GameImage = ({ img, title }) => {
  return (
    <Box sx={{ width: { md: '45%' } }}>
      <img src={img} alt={title} width="100%" style={{ borderRadius: "25px" }} />
    </Box>
  );
};

export default GameImage;