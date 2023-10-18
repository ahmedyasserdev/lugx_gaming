import { Box, Stack } from "@mui/material";
import heroBg from "/images/banner-bg.jpg";
import Features from './Features';
import HeroText from './HeroText';
import HeroImage from './HeroImage';
const Hero = () => {



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
          postion: "relative"


        }} >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            gap={{ xs: "40px", md: "20px" }}

          >
            <HeroText />

           <HeroImage />
          </Stack>


        </Box>
      </Box>


      <Features />
    </>
  );
};

export default Hero;

