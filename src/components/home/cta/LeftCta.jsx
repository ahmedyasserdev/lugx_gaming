import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import MainBtn from './../../MainBtn';

const LeftCta = () => {
    const theme = useTheme();

    const containerStyles = {
        backgroundColor: "#f7f7f7",
        padding: { xs: "30px", md: "80px" },
        borderRadius: "25px",
        width: { md: "40%" },
    };

    const titleStyles = {
        fontWeight: 900,
        textTransform: "uppercase",
        color: theme.palette.secondColor.primary,
    };

    const headingStyles = {
        lineHeight: { md: 1.4 },
        m: '20px 0 40px',
        width: { md: "70%" },
        fontSize: { xs: "26px", sm: "33px", md: "36px" },
        fontWeight: 700,
        color: "initial",
    };

    const descriptionStyles = {
        mb: 4,
        display: "block",
        width: { md: "80%" },
        fontWeight: 600,
    };

    return (
        <Box sx={containerStyles} mt={10}>
            <Box>
                <Typography
                    variant="subtitle2"

                    sx={titleStyles}>OUR SHOP</Typography>

                <Typography sx={headingStyles}
                    variant="h2"

                >
                    Go Pre-Order Buy & Get Best{" "}
                    <Typography fontSize="inherit" variant="h3" fontWeight="inherit" color={theme.palette.mainColor.primary}>
                        Prices
                    </Typography>{" "}
                    For You!
                </Typography>

                <Typography sx={descriptionStyles}
                    variant="p"

                >
                    Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
                </Typography>

                <MainBtn padding=".8em 1.8em" title="shop now" />
            </Box>
        </Box>
    );
};

export default LeftCta;