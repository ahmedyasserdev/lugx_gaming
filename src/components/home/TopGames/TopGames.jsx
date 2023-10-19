import React from 'react';
import { Box, Typography, Stack, useTheme, Card, CardMedia, CardContent } from "@mui/material";
import { games } from './../../../data/games';
import ViewAll from '../ViewAll';
import MainBtn from '../../MainBtn';
import { Link } from 'react-router-dom';

const topGames = games.filter((g) => g.isTop === true);

const TopGames = () => {
    const theme = useTheme();

    const cardStyles = {
        transition: "100ms ease",
        "&:hover .title": { color: theme.palette.mainColor.primary },
        overflow: 'visible',
        position: "relative",
        textAlign: "center",
        width: { xs: "90%", sm: "40%", md: "calc(17%  - 30px) " },
        borderRadius: "25px",
        backgroundColor: "#fff",
    };

    const cardMediaStyles = {
        minHeight: "100px",
        borderRadius: "25px",
    };

    return (
        <Box
            sx={{
                backgroundColor: "#f7f7f7",
                borderRadius: "150px",
                padding: "100px 0",
                mt: 20,
            }}
        >
            <Box width="90%" mx="auto">
                <ViewAll subtitle="TRENDING" title="Most Played" />

                <Stack
                    mt={{ xs: 2, sm: 3, md: 4 }}
                    direction={{ xs: "column", sm: "row" }}
                    flexWrap="wrap"
                    alignItems="center"
                    gap={{xs: "50px" , md : "30px"}}
                    justifyContent="center"
                >
                    {topGames.map(({ id, img, type, title }) => (
                        <Card sx={cardStyles} key={id}>
                            <Link to={`/game/${id}`}>
                                <CardMedia
                                    component="img"
                                    image={img}
                                    alt={title}
                                    sx={cardMediaStyles}
                                />

                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        fontSize="14px"
                                        color="#7a7a7a"
                                        textTransform="capitalize"
                                        gutterBottom
                                    >
                                        {type}
                                    </Typography>

                                    <Typography
                                        className="title"
                                        variant="h5"
                                        fontSize={{ xs: "22px", md: "20px" }}
                                        fontWeight={600}
                                        color={theme.palette.nuetral.primary}
                                    >
                                        {title}
                                    </Typography>
                                </CardContent>

                                <Box sx={{ position: "absolute", bottom: '-40px', left: '50%', transform: "translateX(-50%)" }}>
                                    <MainBtn padding='.8em .5em' title="explore" />
                                </Box>
                            </Link>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default TopGames;