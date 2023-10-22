import React, { useState } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { games } from '../data/games';
import GameCard from '../components/GameCard';
import PageHeading from '../components/PageHeading';
import { AnimatePresence, motion } from 'framer-motion';

const Shop = () => {
    const [selectedType, setSelectedType] = useState('show all');
    const theme = useTheme();

    const uniqueTypes = ['show all', ...new Set(games.map((game) => game.type))]
    const filteredGames = selectedType === "show all" ? games : games.filter((game) => game.type === selectedType)

    return (
        <Box>
            <PageHeading title="OUR SHOP" />

            <Box mb={4} width="90%" mx="auto">
                <Box my={{ xs: 5, sm: 8, md: 12 }} flexWrap="wrap" display="flex" justifyContent="center" alignItems="center" gap="20px">
                    {uniqueTypes.map((type, index) => (
                        <Typography
                            key={index}
                            onClick={() => setSelectedType(type)}
                            sx={{
                                cursor: "pointer",
                                backgroundColor: type === selectedType ? theme.palette.secondColor.primary : "#eee",
                                p: ".5em 1em",
                                borderRadius: "100px",
                                color: type === selectedType ? 'white' : theme.palette.nuetral.primary,
                                textTransform: "uppercase",
                                fontWeight: 700,
                                fontSize: "15px"
                            }}
                        >
                            {type}
                        </Typography>
                    ))}
                </Box>

                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <GameCard cards={filteredGames} />
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Box>
    );
}

export default Shop;
