import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const GameDetails = ({ title, type, price, discount }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        alignSelf: "start",
        textAlign: { xs: "center", md: "start" },
        width: { xs: "100%", md: '50%' }
      }}
    >
      <Typography
        variant="h2"
        fontSize={{ xs: "33px", md: "66px" }}
        sx = {{textAlign : "center"}}
        fontWeight={700}
        color={theme.palette.nuetral.primary}
      >
        {title}
      </Typography>
      <Box pl={{ md: "70px" }}>
        <Typography
          color={discount ? theme.palette.secondColor.primary : theme.palette.mainColor.primary}
          fontWeight={discount ? 300 : 600}
          fontSize={discount ? '33px' : '40px'}
          variant="h6"
          sx={{ textDecoration: discount ? 'line-through' : null }}
        >
          <span style={{ color: "#000" }}>price</span>: ${price}
        </Typography>

        {discount && (
          <Typography fontSize="22px" fontWeight={600} color={theme.palette.mainColor.primary} variant="body1">
            <span style={{ color: "#000" }}>offer</span>: ${discount}
          </Typography>
        )}
        <Typography textTransform="capitalize" fontWeight={700} variant="h6" color="#000">
          Type: <span   style = {{ color : theme.palette.secondColor.primary  }}  > {type} </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default GameDetails;
