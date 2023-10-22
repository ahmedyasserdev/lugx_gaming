import React from 'react';
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';

const GameReviews = ({ reviews, currentIndex, setCurrentIndex }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 5,
        backgroundColor: "#f7f7f7",
        p: "40px",
        borderRadius: "25px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="center" pb={2} spacing={2}>
        {reviews.map((review, index) => (
          <Typography
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              color: index === currentIndex ? theme.palette.mainColor.primary : theme.palette.nuetral.primary,
              cursor: "pointer",
            }}
            variant="h4"
            fontSize={{ xs: "20px", md: "30px" }}
            fontWeight={700}
          >
            {review.title}
          </Typography>
        ))}
      </Stack>

      <Divider />

 <Box width  ="90%"  >
       <Typography display="block" pt={2} variant="body1">
         {reviews[currentIndex].text}
       </Typography>
       <Typography display="block" pt={2} variant="body1">
         {reviews[currentIndex].text2}
       </Typography>
 </Box>
    </Box>
  );
};

export default GameReviews;
