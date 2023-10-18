import React, { useState, useEffect } from 'react';
import { Box, Chip, Typography , useTheme } from "@mui/material";
import { trendingImages } from '../../../data/heroImgs';

const HeroImage = () => {
    const [heroImg, setHeroImg] = useState( "/images/banner-image.jpg");
    const theme = useTheme()


    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % trendingImages.length;
            setHeroImg(trendingImages[index].imageUrl);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const chipStyle = {
        position: "absolute",
        right: { xs: "20px", md: "40px" },
        top: "20px",
        backgroundColor: theme.palette.secondColor.primary,
        color: "#fff",
        fontSize: { xs: "22px", md: "22px" },
        fontWeight: "bold",
        zIndex: 2,
        p: "15px 0",
    };

    const discountStyle = {
        backgroundColor: theme.palette.mainColor.primary,
        display: "block",
        fontSize: "28px",
        fontWeight: "bold",
        position: "absolute",
        p: "15px",
        bottom: "-10px",
        left: 0,
        borderRadius: "100px",
    };

    return (
        <Box
            sx={{
                width: { xs: "100%", md: "40%" },
                textAlign: { xs: "center", md: "start" },
            }}
        >
            <Box sx={{ position: "relative" ,  transition: "300ms all ease"  }}>
                <img
                    className="hero-img"
                    src={heroImg}
                    alt={"hero banner"}
                    style={{ borderRadius: "25px", width: "100%",}}
                />

                {trendingImages.map((image, idx) => (
                    <React.Fragment key={idx}>
                        {image.imageUrl === heroImg && (
                            <>
                                <Chip label={image.chipPrice} sx={chipStyle} />
                                <Typography variant="span" color="#fff" sx={discountStyle}>
                                    {image.discount}
                                </Typography>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default HeroImage;