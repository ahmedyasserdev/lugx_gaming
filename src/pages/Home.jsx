import React from 'react'
import { Box } from '@mui/material';
import Hero from '../components/home/hero/hero';
import Trending from '../components/home/trending/trending';
import TopGames from '../components/home/TopGames/TopGames';
import Cta from '../components/home/cta/Cta';

const Home = () => {
  return (
    <Box
        sx = {{
          
        }}
    >

    <Hero />
    <Trending />
    <TopGames />
    <Cta />
    
    </Box>
  )
}

export default Home