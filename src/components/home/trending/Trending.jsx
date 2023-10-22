import React from 'react';
import ViewAll from '../ViewAll';
import { Box, } from '@mui/material';
import { games } from '../../../data/games';
import GameCard from '../../GameCard';

const trendingGames = games.filter((g) => g.isTrending === true);

const Trending = () => {


    return (
        <Box sx={{ width: '90%', mx: 'auto', mt: { xs: '80px', md: '150px' } }}>
            <ViewAll subtitle="TRENDING" title="Trending Games" />

            <GameCard cards={trendingGames} />

        </Box>
    );
};

export default Trending;