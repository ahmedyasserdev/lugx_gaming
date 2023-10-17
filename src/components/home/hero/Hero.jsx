import React, { useState, useEffect } from 'react';
import { Box, Typography, Chip, useTheme, TextField, Stack } from "@mui/material";
import heroBg from "/images/banner-bg.jpg";
import MainBtn from '../../MainBtn';
import Trending3 from "/images/trending-03.jpg";
import Trending1 from "/images/trending-01.jpg";
import HeroImg from "/images/banner-image.jpg";
import TopGame from "/images/top-game-05.jpg"
import Categories2 from "/images/categories-02.jpg"
import Features from './Features';
const Hero = () => {
  const theme = useTheme();
  const [heroImg, setHeroImg] = useState(HeroImg);

  const textFieldStyle = {
    backgroundColor: "white",
    borderRadius: "100px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  };

  const chipStyle = {
    position: "absolute",
    right: { xs: "20px", md: "40px" },
    top: "20px",
    backgroundColor: theme.palette.mainColor.primary,
    color: "#fff",
    fontSize: { xs: "22px", md: "22px" },
    fontWeight: "bold",
    zIndex: 2,
    p: "15px 0",
  };

  const discountStyle = {
    backgroundColor: theme.palette.secondColor.primary,
    display: "block",
    fontSize: "28px",
    fontWeight: "bold",
    position: "absolute",
    p: "15px",
    bottom: "-10px",
    left: 0,
    borderRadius: "100px",
  };
  const trendingImages = [
    {
      imageUrl: HeroImg,
      chipPrice: "$22",
      discount: "-40%",
    },
    {
      imageUrl: Categories2,
      chipPrice: "$80",
      discount: "-45%",
    },
    {
      imageUrl: TopGame,
      chipPrice: "$50",
      discount: "-60%",
    },
    {
      imageUrl: Trending3,
      chipPrice: "$30",
      discount: "-50%",
    },
    {
      imageUrl: Trending1,
      chipPrice: "$25",
      discount: "-35%",
    },
  ];

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % trendingImages.length;
      setHeroImg(trendingImages[index].imageUrl);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
 <>
     <Box
       sx={{
         backgroundImage: `url(${heroBg})`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         borderRadius: "0 0 150px 150px",
  
       }}
     >
       <Box sx={{
         width: "90%",
         mx: "auto",
         p: "125px 10px 225px",
         postion : "relative"

  
       }} >
         <Stack
           direction={{ xs: "column", md: "row" }}
           justifyContent={{ xs: "center", md: "space-between" }}
           alignItems="center"
           gap={{ xs: "40px", md: "20px" }}
  
         >
           <Box sx={{ width: { xs: "100%", md: "49%" }, textAlign: { xs: "center", md: "start" } }}>
             <Box>
               <Typography
                 variant="p"
                 color="#fff"
                 textTransform="capitalize"
                 fontWeight={500}
                 fontSize={"20px"}
               >
                 Welcome to lugx
               </Typography>
               <Typography
                 className="hero-title"
                 variant="h2"
                 color="#fff"
                 textTransform="capitalize"
                 fontWeight={700}
                 fontSize={"48px"}
                 mt={"20px"}
                 mb={"40px"}
               >
                 BEST GAMING SITE  EVER!
               </Typography>
               <Typography
                 width={{ xs: "100%", md: "98%" }}
                 display={"block"}
                 variant="p"
                 color="#fff"
                 textTransform="capitalize"
                 fontWeight={400}
                 lineHeight={1.8}
                 mb={"70px"}
               >
                 LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
                 You can download and use this layout for commercial purposes. Please tell your friends
                 about TemplateMo.
               </Typography>
             </Box>
  
             <Box sx={{ position: "relative", width: { xs: "100%", md: "80%" } }}>
               <TextField
                 sx={textFieldStyle}
                 placeholder="Type Something"
               />
               <Box
                 sx={{
                   position: "absolute",
                   right: "0",
                   top: "50%",
                   transform: "translateY(-50%)",
                 }}
               >
                 <MainBtn title={"Search now"} padding={{ xs: "1em 1.2em", sm: "1em 2em " }} />
               </Box>
             </Box>
           </Box>
  
           <Box
             sx={{
               width: { xs: "100%", md: "40%" },
               textAlign: { xs: "center", md: "start" },
             }}
           >
             <Box sx={{ position: "relative" }}>
               <img
                 className="hero-img"
                 src={heroImg}
                 alt={"hero banner"}
                 style={{ borderRadius: "25px", width: "100%" }}
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
         </Stack>
  
  
       </Box>
     </Box>
  
    
        <Features />
 </>
  );
};

export default Hero;