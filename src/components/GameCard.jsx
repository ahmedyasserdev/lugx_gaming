import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Box, Typography, Stack  , useTheme} from '@mui/material';
import { motion } from 'framer-motion';

const GameCard = ({ cards }) => {
    const theme = useTheme()
    const cardStyles = {
        minHeight: '250px',
        width: { xs: '100%', sm: '45%', md: '24%' },
        position: 'relative',
        backgroundColor: '#eeeeee',
        borderRadius: '25px',
        transition : "100ms ease" ,
        "&:hover .title" : {color : theme.palette.mainColor.primary }  ,
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

        <Stack mt={2} direction="row" flexWrap="wrap" justifyContent={"center"} alignItems="center" gap="12px">
            {cards.map(({ id, img, type, title, discount, price }) => (
                <Card key={id} sx={cardStyles}>
                    <Link to={`/game/${id}`}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.25 }}>
                            <CardMedia title={title} sx={cardMediaStyles} image={img} />
                        </motion.div>
                        <CardContent>
                            <Typography variant="body2" fontSize="14px" color="#7a7a7a" textTransform="capitalize" gutterBottom>
                                {type}
                            </Typography>
                            <Typography className="title" variant="h5" fontSize="22px" fontWeight={600} color={theme.palette.nuetral.primary}>
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
    );
}

export default GameCard;
