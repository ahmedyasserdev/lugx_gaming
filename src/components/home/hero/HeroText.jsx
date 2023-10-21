import React from 'react';
import { Box, Typography, TextField , useTheme } from "@mui/material";
import MainBtn from '../../MainBtn';

const HeroText = () => {
 const theme = useTheme()
  const titleStyles = {
    variant: "h2",
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "48px",
    mt: "20px",
    mb: "40px",
  };

  const paragraphStyles = {
    variant: "p",
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: 400,
    lineHeight: 1.8,
    mb: "70px",
  };

  const textFieldStyles = {
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
        border: `2px solid ${theme.palette.secondColor.primary}`,
        borderRadius: "100px",
      
    },
    },
  };

  const buttonContainerStyles = {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <Box sx={{ width: { xs: "100%", md: "49%" }, textAlign: { xs: "center", md: "start" } }}>
      <Box>
        <Typography variant="p" color="#fff" fontWeight={500} fontSize="20px">
          Welcome to lugx
        </Typography>
        <Typography sx={titleStyles}>BEST GAMING SITE EVER!</Typography>
        <Typography
          width={{ xs: "100%", md: "98%" }}
          display="block"
          sx={paragraphStyles}
        >
          LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites.
          You can download and use this layout for commercial purposes. Please tell your friends
          about TemplateMo.
        </Typography>
      </Box>

      <Box sx={{ position: "relative", width: { xs: "100%", md: "80%" } }}>
        <TextField sx={textFieldStyles} placeholder="Type Something" />

        <Box sx={buttonContainerStyles}>
          <MainBtn title="Search now" padding={{ xs: "1em 1.2em", sm: "1em 2em" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroText;