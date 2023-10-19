import React from 'react'
import { Box, Stack, Typography, TextField, useTheme } from "@mui/material"
import LeftCta from './LeftCta';
const Cta = () => {
    const theme = useTheme()
    return (
        <Box
            className="cta"

            sx={{
                width: "90%",
                mx: "auto",
                mt: 25
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"} alignItems={"center"}
                flexWrap="wrap" gap="20px"
            >
              <LeftCta />


            </Stack>


        </Box>
    )
}

export default Cta