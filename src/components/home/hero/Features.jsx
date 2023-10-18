import React from 'react'
import { Box, Stack, Typography, useTheme } from "@mui/material"
import { data } from '../../../data/featuresData'


const Features = () => {
    const theme = useTheme()
    return (
        <Box>
            <Stack
                direction={{ xs: "column", sm: 'row' }} alignItems={"center"} justifyContent="center" flexWrap={"wrap"} gap={{ xs: "40px 0", sm: " 20px 40px" }}  >

                {

                    data.map(({ img, title }, index) => (
                        <Box key={index}
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "25px",
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                p: "40px",
                                gap: "25px 0",
                                boxShadow: "4px 15px 2px rgba(0,0,0,0.1)",
                                width : {xs : "90%" , sm : "auto" }
                            }}
                        >
                            <Box sx={{
                                backgroundColor: theme.palette.mainColor.primary, p: "20px", borderRadius: "50%",
                                "&:hover": {
                                    transition: "300ms ease",
                                    backgroundColor: theme.palette.secondColor.primary,
                                }

                            }}>
                                <img src={img} style={{}} />
                            </Box>


                            <Typography textTransform="uppercase" fontSize="19px" className="heading" variant="h6" color="white">{title}</Typography>


                        </Box>

                    ))

                }




            </Stack>



        </Box>
    )
}

export default Features