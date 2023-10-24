import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {info} from "../../data/info"


const Info = () => {
    const theme = useTheme();



    const titleStyles = {
        fontWeight: 900,
        textTransform: "uppercase",
        color: theme.palette.secondColor.primary,
    };

    const headingStyles = {
        lineHeight: { md: 1.4 },
        m: "10px 0 40px",
        fontWeight: 700,
        color: theme.palette.nuetral.primary,
        fontSize: "40px",

    };

    const descriptionStyles = {
        display: "block",
        fontWeight: 400,
    };

    const infoTitle = {
        color: theme.palette.nuetral.primary,
        fontSize: "15px",
        fontWeight: 700,
        mb: 1
    }

    const infoValue = {
        color: '#aaaaaa',
        fontSize: "16px",

    }

    return (
        <Box
            sx={{
                backgroundColor: "#f7f7f7",
                padding: "60px ",
                borderRadius: "25px",
                width: { md: "43%" },
            }}
        >
          <Box width="95%" mx="auto" >
              <Box>
                  <Typography variant="subtitle2" sx={titleStyles}>
                      CONTACT US
                  </Typography>
            
                  <Typography sx={headingStyles} variant="h3">
                      Say Hello!
                  </Typography>
            
                  <Typography sx={descriptionStyles} variant="p" component="p" >
                      LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
                      This template is provided by TemplateMo and it is suitable for your
                      gaming shop ecommerce websites. Feel free to use this for any purpose.
                      Thank you.
                  </Typography>
              </Box>
            
            
              <Box>
                  {
                      info.map(({ title, value }, index) => (
                          <Box key={index} mt={4}  >
                              <Typography variant="h5" sx={infoTitle} >{title}</Typography>
                              <Typography variant="span" sx={infoValue}  >{value}</Typography>
            
            
                          </Box>
                      ))
                  }
            
            
              </Box>
            
          </Box>




        </Box>
    );
};

export default Info;
