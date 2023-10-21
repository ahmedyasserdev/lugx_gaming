import React from 'react';
import { Box, Typography, useTheme, TextField } from "@mui/material";
import MainBtn from './../../MainBtn';

const RightCta = () => {
  const theme = useTheme();

  // Define shared styles as variables
  const containerStyles = {
    backgroundColor: "#f7f7f7",
    padding: { xs: "30px", md: "50px" },
    borderRadius: "25px",
    width: { md: "40%" },
    alignSelf: "end",
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
    position: { md: "absolute" },
    right: { md: "0" },
    top: { md: "50%" },
    transform: { md: "translateY(-50%)" },
    display: { xs: "grid", md: 'block' },
    mt: { xs: 2, md: 0 },
  };

  return (
    <Box sx={containerStyles}>
      <Typography variant="subtitle2" sx={titleStyles}>
        NEWSLETTER
      </Typography>

      <Typography variant="h2" sx={headingStyles}>
        Get Up To $100 Off Just Buy Subscribe{" "}
        <Typography fontSize="inherit" variant="h3" fontWeight="inherit" color={theme.palette.mainColor.primary}>
          Newsletter!
        </Typography>{" "}
        For You!
      </Typography>

      <Box sx={{ position: "relative" }}>
        <TextField sx={textFieldStyles} placeholder="Your email..." />

        <Box sx={buttonContainerStyles}>
          <MainBtn title="Search now" padding={{ xs: "1em 1.2em", sm: "1em 2em" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default RightCta;