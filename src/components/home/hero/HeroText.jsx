import React from 'react';
import { Box, Typography, TextField, useTheme } from "@mui/material";
import MainBtn from '../../MainBtn';
import { motion } from "framer-motion";

const HeroText = () => {
  const theme = useTheme();

  const textStyle = {
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: 400,
    lineHeight: 1.8,
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const title = "BEST GAMING SITE EVER!";
  const paragraph = "LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.";

  return (
    <Box sx={{ width: { xs: "100%", md: "49%" }, textAlign: { xs: "center", md: "start" } }}>
      <Box>
        <Typography variant="p" color="#fff" fontWeight={500} fontSize="20px">
          Welcome to lugx
        </Typography>
        <motion.h2 style={{ ...textStyle, fontWeight: 700  , fontSize  : "48px" }} variants={variants} initial="hidden" animate="visible" className="hero-title">
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants} fontSize="inherit">
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p width={{ xs: "100%", md: "98%" }} display="block" style={{ ...textStyle, marginBottom: "70px" }} variants={variants} initial="hidden" animate="visible">
          {paragraph.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants} style={{ fontSize: "inherit" }}>
              {char}
            </motion.span>
          ))}
        </motion.p>
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
                border: `2px solid ${theme.palette.secondColor.primary}`,
                borderRadius: "100px",
              },
            },
          }}
          placeholder="Type Something"
        />

        <Box sx={{ position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" }}>
          <MainBtn title="Search now" padding={{ xs: "1em 1.2em", sm: "1em 2em" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroText;