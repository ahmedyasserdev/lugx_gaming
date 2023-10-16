import { Box, Typography, Stack, TextField, Chip, useTheme } from "@mui/material";
import heroBg from "/images/banner-bg.jpg";
import MainBtn from '../MainBtn';
import HeroImg from "/images/banner-image.jpg";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "0 0 150px 150px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems="center"
        gap={{ xs: "40px", md: "20px" }}
        sx={{
          width: "90%",
          mx: "auto",
          p: "125px 10px 225px",
        }}
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
              sx={{ position: "relative" }}
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
              sx={{
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
              }}
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
              <MainBtn title={"Search now"} padding={{xs :  "1em 1.2em" ,   sm : "1em 2em "}} />
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
            <img className="hero-img" src={HeroImg} alt={"hero banner"} style={{ borderRadius: "25px"  , width : "100%"}} />
          
          
            <Chip
            label="$22"
            sx={{
              position: "absolute",
              right: { xs: "20px", md: "40px" },
              top: "20px",
              backgroundColor: theme.palette.mainColor.primary,
              color: "#fff",
              fontSize: { xs: "22px", md: "22px" },
              fontWeight: "bold",
              zIndex: 2,
              p: "15px 0",
            }}
          />
  
          <Typography
            variant="span"
            color="#fff"
            sx={{
              backgroundColor: theme.palette.secondColor.primary,
              display: "block",
              fontSize: "28px",
              fontWeight: "bold",
              position: "absolute",
              p: "15px",
              bottom: "-10px",
              left:0,
              borderRadius: "100px",
            }}
          >
            -40%
          </Typography>
  



          </Box>

          
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;