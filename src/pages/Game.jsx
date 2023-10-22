import React, { useState } from 'react';
import { games } from '../data/games';
import { Box, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { reviews } from '../data/reviews';
import GameImage from '../components/game/GameImage';
import GameDetails from '../components/game/GameDetails';
import GameReviews from '../components/game/GameReviews';

const Game = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === +id);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <GameImage img={game.img} title={game.title} />
          <GameDetails {...game} />
          <GameReviews reviews={reviews} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </Stack>
      )}
    </Box>
  );
};

export default Game;
