import React from 'react';
import ViewAll from '../ViewAll';
import { Box, Card, CardMedia, CardContent, Typography, Stack, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { games } from '../../../data/games';

const trendingGames = games.filter((g) => g.isTrending === true);

const Trending = () => {
  const theme = useTheme();

  const cardStyles = {
    minHeight: '250px',
    width: { xs: '100%', sm: '45%', md: '24%' },
    position: 'relative',
    backgroundColor: '#eeeeee',
    borderRadius: '25px',
  };

  const cardMediaStyles = {
    height: { xs: '250px', md: 140 },
    width: '100%',
    borderRadius: '25px',
  };

  const priceBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    p: '10px',
    textAlign: 'center',
    borderRadius: '15px',
    position: 'absolute',
    top: '10px',
    right: '15px',
    backgroundColor: theme.palette.mainColor.primary,
  };

  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: { xs: '80px', md: '150px' } }}>
      <ViewAll subtitle="TRENDING" title="Trending Games" />

      <Stack mt={2} direction="row" flexWrap="wrap" alignItems="center" gap="12px">
        {trendingGames.map(({ id, img, type, title, discount, price }) => (
          <Card key={id} sx={cardStyles}>
            <Link to={`/game/${id}`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <CardMedia title  ={title} sx={cardMediaStyles} image={img}  />
              </motion.div>
              <CardContent>
                <Typography variant="body2" fontSize="14px" color="#7a7a7a7" textTransform="capitalize" gutterBottom>
                  {type}
                </Typography>
                <Typography variant="h5" fontSize="22px" fontWeight={600} color={theme.palette.nuetral.primary}>
                  {title}
                </Typography>

                <Box sx={priceBoxStyles}>
                  <Typography
                    color="#fff"
                    fontWeight={discount ? 300 : 600}
                    fontSize={discount ? '17px' : '22px'}
                    variant="body1"
                    sx={{ textDecoration: discount ? 'line-through' : null }}
                  >
                    ${price}
                  </Typography>

                  {discount && (
                    <Typography fontSize="22px" fontWeight={600} color="#fff" variant="body1">
                      ${discount}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Link>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Trending;