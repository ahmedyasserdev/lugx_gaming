import React, { useState } from 'react';
import { games } from '../data/games';
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { reviews } from '../data/reviews';



const Game = () => {
  const theme = useTheme();
  const { id } = useParams();
  const game = games.find((g) => g.id === +id);
  const { title, img, type, price, discount } = game;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReviews = reviews[currentIndex];

  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        mt: { xs: 10, md: 15 }
      }}
    >
      {game && (
        <Stack
          direction={{ md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          flexWrap="wrap"
        >
          <Box sx={{ width: { md: '45%' } }}>
            <img src={img} alt={title} width="100%" style={{ borderRadius: "25px" }} />
          </Box>

          <Box
            sx={{
              alignSelf: "start",
              textAlign: { xs: "center", md: "start" },
              width: { xs: "100%", md: '50%' }
            }}
          >
            <Typography
              textAlign={{ xs: "center", md: "start" }}
              variant="h2"
              fontSize={{ xs: "33px", md: "66px" }}
              fontWeight={700}
              color={theme.palette.nuetral.primary}
            >
              {title}
            </Typography>
            <Box pl={{ md: "60px" }}>
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
                Type: {type}
              </Typography>
            </Box>
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

              <Typography display="block" pt={2} variant="body1">
                {currentReviews.text}
              </Typography>
            </Box>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Game;