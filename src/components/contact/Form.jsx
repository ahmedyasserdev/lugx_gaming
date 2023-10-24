import React from 'react';
import { Box, TextField, TextareaAutosize } from '@mui/material';
import MainBtn from './../MainBtn';

const Form = () => {
  const inputStyles = {
    backgroundColor: "#f7f7f7",
    borderRadius: "100px",
    width: { xs : "100%" , md: "46%" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: `2px solid #f7f7f7`,
        borderRadius: "100px",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
        borderRadius: "100px",
      },
      "&.Mui-focused fieldset": {
        border: `2px solid black`,
        borderRadius: "100px",
      },
    },
  };

  const textareaStyles = {
    ...inputStyles,
    width: "100%",
    padding: "35px",
    resize: "vertical",
    borderRadius : "12px",
    border : "none"
  };

  return (
    <Box mt  ={{xs: 4 , md : 0}}  width={{ md: "48%" }} ms="auto"  component="form">
      <Box display="flex" gap={{ xs : "25px" , md: "20px" }} flexWrap="wrap">
      <TextField sx={inputStyles} placeholder="Your Name..." required />
      <TextField sx={inputStyles} placeholder="Your Surname..." required />
      <TextField sx={inputStyles} placeholder="Your E-mail..." required />
      <TextField sx={inputStyles} placeholder="Your Subject..." required />
      </Box>

      <Box mt = {4} >
        <TextareaAutosize
          style={textareaStyles}
          placeholder="Your Message..."
        />
      </Box>
   
    <Box mt = {3} >
    <MainBtn title = "send Message Now" type = "submit" />
    
    
    </Box>
   
      </Box>
  );
};

export default Form;